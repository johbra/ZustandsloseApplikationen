(ns nonopolyful
  (:require [nonopolyful.feld :refer :all :rename {to-string f-to-string}]
            [nonopolyful.guthaber :refer :all :rename {to-string g-to-string}]
            [nonopolyful.spielbrett :refer :all]
            [nonopolyful.welten :refer :all]
            [nonopolyful.taler :refer :all :rename {to-string t-to-string}]))
(use 'clojure.pprint)

;; globale Konstanten
(def *gehaelter*
  {:bonus-gehalt (nt 4000)
   :grund-gehalt (nt 3000)
   :kein-gehalt  (nt 0)})

(def *startguthaben-spieler* (nt 5000))
(def *startguthaben-bank* (nt 20000))
(def *maximale-rundenanzahl* 20)

;; Hilfsfunktionen

;; wendet f auf alle values einer map m an
(defn map-function-on-map-vals [f m] 
  (zipmap (keys m) (map f (vals m))))

(defn erzeuge-drei-spieler [feld] 
  {"Karl"  (->Spieler "Karl" feld),
   "Rosa"  (->Spieler "Rosa" feld),
   "Klara" (->Spieler "Klara" feld)})


;; die NoNopoly-Welt
(def nonopoly
  {:bank nil
   :spieler-liste ()
   :spieler-reihenfolge [] ; Vektor mit den Spielernamen in der Würfelreihenfolge}
   :an-der-Reihe nil ; der Spieler, der als nächster an der Reihe ist
   :spielbrett spielbrett
   :anzahl-runden 1
   :anzahl-spieler 0})

;;Erzeuge die Bank, drei Spieler, stelle sie auf Los und leg die Startreihen-
;; folge fest
(defn initialisiere [no-welt]
  (let [nw (-> no-welt 
               (assoc :bank (->Bank "Bank" *startguthaben-bank*))
               (assoc :spieler-liste (erzeuge-drei-spieler ((felder spielbrett) 0))))]
    (-> nw
        (assoc :anzahl-spieler (count (nw :spieler-liste)))
        (assoc :spieler-reihenfolge (into [] (keys (nw :spieler-liste))))
        (assoc :an-der-Reihe (first (keys (nw :spieler-liste)))))))

;; die Bank überweist den Teilnehmern ihr Startguthaben
(defn verteile-startguthaben [no-welt] 
  (-> no-welt
      (assoc :bank (hebe-ab (:bank no-welt)
                            (mul *startguthaben-spieler*
                                 (no-welt :anzahl-spieler))))
      (assoc :spieler-liste
             (map-function-on-map-vals
              (fn [t] (schreibe-gut t *startguthaben-spieler*))
              (:spieler-liste no-welt)))))

;; die Bank zahlt an Spieler das Gehalt
(defn zahle-gehalt [no-welt sp]
  (let [kb? (kann-bezahlen? (no-welt :bank) (*gehaelter* (gehalts-zahlung sp)))
        zahlbetrag (if kb? (*gehaelter* (gehalts-zahlung sp))
                       (do (println "Bank ist pleite!" )(guthaben (no-welt :bank))))
        [bank spieler] (ueberweise (no-welt :bank) sp zahlbetrag)]
    (-> no-welt 
        (assoc :bank (if kb? bank (s-pleite bank)))
        (assoc :spieler-liste
               (assoc (:spieler-liste no-welt)
                      (:name spieler) (assoc spieler :gehalts-zahlung :kein-gehalt))))))

;; macht aus dem Spielernamen den Spieler
(defn spieler-an-der-reihe [no-welt]
  ((no-welt :spieler-liste) (no-welt :an-der-Reihe)))

;; ermittelt dne n#chsten Spieler, der ziehen muss.
;; Bankrotte Spieler werden ausgelassen.
;; Der Rundenzähler wird ggf. erhöht
(defn der-naechste-an-der-reihe [no-welt]
  (let [index-an-der-reihe (mod (+ (.indexOf (:spieler-reihenfolge no-welt)
                                             (:an-der-Reihe no-welt))
                                   1)
                                (no-welt :anzahl-spieler))
        nw        (assoc no-welt :an-der-Reihe 
                         ((:spieler-reihenfolge no-welt) index-an-der-reihe))]
    (if (pleite? (spieler-an-der-reihe nw))
      (der-naechste-an-der-reihe nw)
      (if (= 0 index-an-der-reihe)
        (do (println "Runde " (+ 1 (nw :anzahl-runden)) " beginnt.")
            (assoc nw :anzahl-runden (+ 1 (nw :anzahl-runden))))
        nw))))

;; falls die Bank nicht pleite, für der Spieler an der Reihe seine Aktion aus.
(defn setze-spiel-fort-wenn-bank-nicht-pleite [no-welt sp]
  (cond
    (not (pleite? (no-welt :bank)))
    (-> no-welt
        (fuehre-spieler-aktion-aus sp)
        (der-naechste-an-der-reihe))
    :else no-welt))

;; führt den Spielzug eines Spieler aus 
(defn lass-spieler-an-der-reihe-ziehen [no-welt] 
  (let [sp (spieler-an-der-reihe no-welt)
        neue-pos (neue-position sp (felder (:spielbrett no-welt)))
        sp0 (bestimme-gehaltszahlung sp neue-pos)
        sp1 (spieler-an-der-reihe (zahle-gehalt no-welt sp0))
        sp2 (gehe-auf sp1 neue-pos)] 
    (-> no-welt 
        (neuer-status sp2)
        (setze-spiel-fort-wenn-bank-nicht-pleite sp2))))

(defn nur-noch-ein-spieler-zahlungsfaehig? [spieler-liste] 
  (<= (count (filter #(not (pleite? %)) (vals spieler-liste))) 1))

;; ermittelt das Spielende
(defn spiel-beendet? [no-welt]
  (or (> (no-welt :anzahl-runden) *maximale-rundenanzahl*)
      (pleite? (:bank no-welt))
      (nur-noch-ein-spieler-zahlungsfaehig? (:spieler-liste no-welt))))

(defn spielstand [no-welt]
  (str
   (g-to-string (no-welt :bank))
   (reduce str (map
                (fn [s] (g-to-string s))
                (vals (no-welt :spieler-liste))))
   "an der Reihe ist: "  (no-welt :an-der-Reihe) "\n"
   (to-string (no-welt :spielbrett))))

;; Spielablauf
(-> (-> nonopoly
        (initialisiere) (verteile-startguthaben))
    (neue-welt
     {:naechste-welt lass-spieler-an-der-reihe-ziehen
      :stopp-wenn spiel-beendet?})
    (spielstand))
