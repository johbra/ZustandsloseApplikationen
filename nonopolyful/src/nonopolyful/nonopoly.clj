(ns nonopolyful
  (:require [nonopolyful.feld :refer :all :rename {to-string f-to-string}]
            [nonopolyful.guthaber :refer :all :rename {to-string g-to-string}]
            [nonopolyful.spielbrett :refer :all]
            [nonopolyful.welten :refer :all]
            [nonopolyful.taler :refer :all :rename {to-string t-to-string}]))
(use 'clojure.pprint)
(use 'clojure.tools.trace)

;; globale Konstanten
(def *gehaelter*
  {:bonus-gehalt (nt 4000)
   :grund-gehalt (nt 8000)
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

;; verwandelt den Namen eines Spielers in einen Spieler
(defn name->spieler [no-welt strng]
  ((no-welt :spieler-liste) strng))

;; setzt den Spieler in der spieler-liste
(defn aktualisiere-spieler [no-welt spieler]
  (assoc-in no-welt [:spieler-liste (name spieler)] spieler))

;;Erzeuge die Bank, drei Spieler, stelle sie auf Los und leg die Startreihen-
;; folge fest
(defn initialisiere [no-welt]
  (let [nw (-> no-welt 
               (assoc :bank (->Bank "Bank" *startguthaben-bank*))
               (assoc :spieler-liste (erzeuge-drei-spieler ((felder spielbrett) 0))))]
    (-> nw
        (assoc :anzahl-spieler (count (nw :spieler-liste)))
        (assoc :spieler-reihenfolge (into [] (keys (nw :spieler-liste))))
        (assoc :an-der-Reihe (first (keys (nw :spieler-liste))))
        (assoc :anzahl-runden 1))))

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

;; prueft die im Umlauf befindliche Geldmenge
(defn pruefe-geldmenge [no-welt]
  (let [spieler-guthaben (reduce add (nt 0)
                                 (map guthaben (vals (no-welt :spieler-liste))))]
    (if (= (add (guthaben (no-welt :bank)) spieler-guthaben)
           *startguthaben-bank*)
      no-welt
      (throw (Exception. "Geldmenge stimmt nicht!")))))

;; liefert den Spieler der dran ist
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
        nw (assoc no-welt :an-der-Reihe 
                  ((:spieler-reihenfolge no-welt) index-an-der-reihe))]
    (if (pleite? (spieler-an-der-reihe nw))
      (der-naechste-an-der-reihe nw)
      (if (= 0 index-an-der-reihe)
        (do (println "Runde " (+ 1 (nw :anzahl-runden)) " beginnt.")
            (assoc nw :anzahl-runden (+ 1 (nw :anzahl-runden))))
        nw))))

;; falls sp pleite gegangen ist, werden die Immos von sp an die Bank zurück gegeben
(defn aktualisiere-spieler-status [no-welt sp]
  (if (pleite? sp)
    (assoc-in no-welt [:spielbrett :felder]
              (mapv (fn [f] (gib-zurueck-an-bank f (name sp)))
                    ;; (fn [t] (if (= (t :eigentuemer) (name sp))
                    ;;           (assoc t :eigentuemer "Bank") t))
                    (felder (:spielbrett no-welt))))
    no-welt))

;; Spieler kauft Immobilie
(defn spieler-kauft-immobilie [no-welt sp immo]
  (if (will-kaufen? sp immo)
    (let [[spieler bank] (ueberweise sp (:bank no-welt) (kaufpreis immo))]
      (println  (name sp) " kauft " (feld-name immo))
      (-> no-welt
          (assoc :spielbrett (neuer-eigentuemer (:spielbrett no-welt) immo spieler))
          (aktualisiere-spieler (loesche-aktion spieler))
          (assoc :bank bank))) 
    no-welt))

;; Spieler muss miete zahlen
(defn miet-zahlung [no-welt sp feld]
  (let [[sp1 sp2] (zahle-miete sp feld (name->spieler no-welt (eigentuemer feld)))]
    (println (name sp) " zahlt miete an " (eigentuemer feld))
    (-> no-welt
        (aktualisiere-spieler (loesche-aktion sp1 ))
        (aktualisiere-spieler sp2)
        (aktualisiere-spieler-status sp1))))

;; führt die Aktion aus, die im Spieler gespeichert ist
(defn fuehre-spieler-aktion-aus [no-welt sp] 
  (cond
    (empty? (aktion sp)) (aktualisiere-spieler no-welt sp)
    (kauf-aktion? sp)    (spieler-kauft-immobilie no-welt sp ((aktion sp) 1))
    (miet-zahlung? sp)   (miet-zahlung no-welt sp ((aktion sp) 1))))

;; falls die Bank nicht pleite, für der Spieler an der Reihe seine Aktion aus.
(defn setze-spiel-fort-wenn-bank-nicht-pleite [no-welt sp]
  (cond
    (not (pleite? (no-welt :bank)))
    (-> no-welt
        (fuehre-spieler-aktion-aus sp)
        (der-naechste-an-der-reihe))
    :else no-welt))

;; die Bank zahlt bei Fälligkeit an Spieler das Gehalt
(defn zahle-gehalt [no-welt sp]
  (if (gehalt-faellig-fuer? sp)
    (let [kb? (kann-bezahlen? (no-welt :bank) (*gehaelter* (gehalts-zahlung sp)))
          zahlbetrag (if kb? (*gehaelter* (gehalts-zahlung sp))
                         (do (println "Bank ist pleite!" )(guthaben (no-welt :bank))))
          [bank spieler] (ueberweise (no-welt :bank) sp zahlbetrag)]
      [(if kb? bank (s-pleite bank)) (s-gehalts-zahlung spieler :kein-gehalt)])
    [(no-welt :bank) sp]))

;; führt den Spielzug eines Spieler aus 
(defn lass-spieler-an-der-reihe-ziehen [no-welt] 
  (let [sp (spieler-an-der-reihe no-welt)
        neue-pos (neue-position sp (felder (:spielbrett no-welt)))
        sp0 (bestimme-gehaltszahlung sp neue-pos)
        sp1 (gehe-auf sp0 neue-pos)
        [bank sp2] (zahle-gehalt no-welt sp1)]    
    (-> no-welt 
        (assoc :bank bank)
        (aktualisiere-spieler sp2) 
        (setze-spiel-fort-wenn-bank-nicht-pleite sp2)
        (pruefe-geldmenge))))

;; prüft, ob nur noch ein oder kein Spieler nicht pleite ist
(defn nur-noch-ein-spieler-zahlungsfaehig? [no-welt] 
  (<= (count (filter #(not (pleite? %)) (vals (no-welt :spieler-liste)))) 1))

;; ermittelt das Spielende
(defn spiel-beendet? [no-welt]
  (or (> (no-welt :anzahl-runden) *maximale-rundenanzahl*)
      (pleite? (:bank no-welt))
      (nur-noch-ein-spieler-zahlungsfaehig? no-welt)))

(defn spielstand [no-welt]
  (str
   (g-to-string (no-welt :bank))
   (reduce str (map
                (fn [s] (g-to-string s))
                (vals (no-welt :spieler-liste))))
   "an der Reihe ist: "  (no-welt :an-der-Reihe) "\n"
   (to-string (no-welt :spielbrett))))

;; Spielablauf
(defn spielen []
  (-> (-> nonopoly
          (initialisiere) (verteile-startguthaben))
      (neue-welt
       {:naechste-welt lass-spieler-an-der-reihe-ziehen
        :stopp-wenn spiel-beendet?}
       spielstand))) 
;; (spielen)
