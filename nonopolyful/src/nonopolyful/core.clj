(ns nonopolyful.core
  (:require [nonopolyful.feld :refer :all :rename {to-string f-to-string}]
            [nonopolyful.guthaber :refer :all :rename {to-string g-to-string}]
            [nonopolyful.spielbrett :refer :all]
            [nonopolyful.welten :refer :all]
            [nonopolyful.taler :refer :all :rename {to-string t-to-string}]))
(use 'clojure.pprint)
(use 'clojure.tools.trace)

;; globale Konstanten
(def GEHAELTER
  {:bonus-gehalt (nt 4000)
   :grund-gehalt (nt 8000)
   :kein-gehalt  (nt 0)})

(def STARTGUTHABEN-SPIELER (nt 5000))
(def STARTGUTHABEN-BANK (nt 20000))
(def MAXIMALE-RUNDENANZAHL 20)

;; Hilfsfunktionen

;; wendet f auf alle values einer map m an
(defn map-function-on-map-vals [f m] 
  (zipmap (keys m) (map f (vals m))))

(defn erzeuge-drei-spieler [feld] 
  {"Karl"  (->Spieler "Karl" feld),
   "Rosa"  (->Spieler "Rosa" feld),
   "Klara" (->Spieler "Klara" feld)})

;; verwandelt den Namen eines Spielers in einen Spieler
(defn name->spieler [no-welt strng]
  ((no-welt :spieler-liste) strng))

;; setzt den Spieler in der spieler-liste
(defn aktualisiere-spieler [no-welt spieler]
  (assoc-in no-welt [:spieler-liste (spieler-name spieler)] spieler))

;; Erzeuge die Bank, drei Spieler, stelle sie auf Los und leg die Startreihen-
;; folge fest
(defn initialisiere [no-welt]
  (let [nw (-> no-welt 
               (assoc :bank (->Bank "Bank" STARTGUTHABEN-BANK))
               (assoc :spieler-liste (erzeuge-drei-spieler ((felder spielbrett) 0))))]
    (-> nw
        (assoc :anzahl-spieler (count (nw :spieler-liste)))
        (assoc :spieler-reihenfolge (into [] (keys (nw :spieler-liste))))
        (assoc :an-der-Reihe (first (keys (nw :spieler-liste))))
        (assoc :anzahl-runden 1))))

(defn erhoehe-rundenzaehler [no-welt]
  (assoc no-welt :anzahl-runden (+ 1 (no-welt :anzahl-runden))))

;; die Bank überweist den Teilnehmern ihr Startguthaben
(defn verteile-startguthaben [no-welt] 
  (-> no-welt
      (assoc :bank (hebe-ab (:bank no-welt)
                            (mul STARTGUTHABEN-SPIELER
                                 (no-welt :anzahl-spieler))))
      (assoc :spieler-liste
             (map-function-on-map-vals
              (fn [t] (schreibe-gut t STARTGUTHABEN-SPIELER))
              (:spieler-liste no-welt)))))

;; prueft die im Umlauf befindliche Geldmenge
(defn pruefe-geldmenge [no-welt]
  (let [spieler-guthaben (reduce add (nt 0)
                                 (map guthaben (vals (no-welt :spieler-liste))))]
    (if (= (add (guthaben (no-welt :bank)) spieler-guthaben)
           STARTGUTHABEN-BANK)
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
            (erhoehe-rundenzaehler nw))
        nw))))

;; falls sp pleite gegangen ist, werden die Immos von sp an die Bank zurück gegeben
(defn aktualisiere-spieler-status [no-welt sp]
  (if (pleite? sp)
    (assoc-in no-welt [:spielbrett :felder]
              (mapv (fn [f] (gib-zurueck-an-bank f (spieler-name sp)))
                    (felder (:spielbrett no-welt))))
    no-welt))

;; Spieler kauft Immobilie
(defn spieler-kauft-immobilie [no-welt sp immo]
  (if (will-kaufen? sp immo)
    (let [[spieler bank] (ueberweise sp (:bank no-welt) (kaufpreis immo))]
      (println  (spieler-name sp) " kauft " (feld-name immo))
      (-> no-welt
          (assoc :spielbrett (neuer-eigentuemer (:spielbrett no-welt)
                                                immo
                                                (spieler-name spieler)))
          (aktualisiere-spieler (loesche-aktion spieler))
          (assoc :bank bank))) 
    no-welt))

;; Spieler muss miete zahlen
(defn miet-zahlung [no-welt sp feld]
  (let [[sp1 sp2] (zahle-miete sp feld (name->spieler no-welt (eigentuemer feld)))]
    (println (spieler-name sp) " zahlt miete an " (eigentuemer feld))
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

;; falls die Bank nicht pleite, führt der Spieler an der Reihe seine Aktion aus.
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
    (let [kb? (kann-bezahlen? (no-welt :bank) (GEHAELTER (gehalts-zahlung sp)))
          zahlbetrag (if kb? (GEHAELTER (gehalts-zahlung sp))
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
  (or (> (no-welt :anzahl-runden) MAXIMALE-RUNDENANZAHL)
      (pleite? (:bank no-welt))
      (nur-noch-ein-spieler-zahlungsfaehig? no-welt)))

;; zeigt den Spielstand als String
(defn spielstand [no-welt]
  (str
   (g-to-string (no-welt :bank))
   (reduce str (map
                (fn [s] (g-to-string s))
                (vals (no-welt :spieler-liste))))
   "an der Reihe ist: "  (no-welt :an-der-Reihe) "\n"
   (to-string (no-welt :spielbrett))))

;; Spielablauf
(defn spielen [no-welt]
  (loop [w no-welt]
    (if (spiel-beendet? w)
      w
      (recur (lass-spieler-an-der-reihe-ziehen w)))))

(defn eine-runde [no-welt]
  (loop [w no-welt runde (no-welt :anzahl-runden)]
    (if (or (< runde (w :anzahl-runden)) (spiel-beendet? w))
      w
      (recur (lass-spieler-an-der-reihe-ziehen w) runde))))

;; Spielabbruch
(defn abbruch [no-welt]
  (assoc no-welt :anzahl-runden (inc MAXIMALE-RUNDENANZAHL)))


;; WorldState: data that represents the state of the world (cw)
;; die NoNopoly-Welt
(def nonopoly
  {:bank nil
   :spieler-liste ()
   :spieler-reihenfolge [] ; Vektor mit den Spielernamen in der Würfelreihenfolge}
   :an-der-Reihe nil ; der Spieler, der als nächster an der Reihe ist
   :spielbrett spielbrett
   :anzahl-runden 1
   :anzahl-spieler 0})

;; WorldState -> String
;; when needed, big-bang obtains the image of the current 
;; state of the world by evaluating (render cw) 
(defn render [cw] (spielstand cw))

;; WorldState String -> WorldState 
;; for each keystroke, big-bang obtains the next state 
;; from (keystroke-handler cw ke);; ke represents the key
(defn keystroke-handler [cw ke]
  (cond
    (= ke "z") (lass-spieler-an-der-reihe-ziehen cw)
    (= ke "f") (spielen cw)
    (= ke "a") (abbruch cw)
    (= ke "r") (eine-runde cw)))

;; WorldState -> Boolean
;; after each event, big-bang evaluates (end? cw) 
(defn end? [cw] (spiel-beendet? cw))

;; WorldState -> WorldState
;; executes one game move
(defn move [cw] (lass-spieler-an-der-reihe-ziehen cw))

;; WorldState -> WorldState
;; launches the program from some initial state 
(defn main [ws]
  (big-bang ws
            {:on-move move
             :to-draw render
             :stop-when end?
             :on-key keystroke-handler
             :allowed-keys {"z" "1 Zug:"
                            "r" "Runde beenden:"
                            "f" "Spiel fortsetzen:"
                            "a" "Spiel abbrechen:"}}))
;; (main (-> nonopoly (initialisiere) (verteile-startguthaben)))
