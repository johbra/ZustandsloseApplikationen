(ns nonopolyful
  (:require [nonopolyful.feld :refer :all :rename {to-string f-to-string}]
            [nonopolyful.guthaber :refer :all :rename {to-string g-to-string} ]
            [nonopolyful.spielbrett :refer :all ]))
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
   "Klara" (->Spieler "Klara" feld)
   })

;; ;; das Schiedsrichter-"Objekt"
(def schiedsrichter
  {:bank nil
   :spieler-liste ()
   :spieler-reihenfolge [] ; Vektor mit den Spielernamen in der Würfelreihenfolge}
   :an-der-Reihe nil ; der Spieler, der als nächster an der Reihe ist
   :spielbrett spielbrett
   :anzahl-runden 1
   :anzahl-spieler 0})

;;Erzeuge die Bank, drei Spieler, stelle sie auf Los und leg die Startreihen-
;; folge fest
(defn initialisiere [self]
  (let [s (-> self 
              (assoc :bank (->Bank "Bank" *startguthaben-bank*))
              (assoc :spieler-liste (erzeuge-drei-spieler ((felder spielbrett) 0))))]
    (-> s
        (assoc :anzahl-spieler (count (s :spieler-liste)))
        (assoc :spieler-reihenfolge (into [] (keys (s :spieler-liste))))
        (assoc :an-der-Reihe (first (keys (s :spieler-liste)))))))

(defn verteile-startguthaben [self] 
  (-> self
      (assoc :bank (hebe-ab (:bank self)
                            (mul *startguthaben-spieler*
                                 (self :anzahl-spieler))))
      (assoc :spieler-liste
             (map-function-on-map-vals
              (fn [t] (schreibe-gut t *startguthaben-spieler*))
              (:spieler-liste self)))))

(defn zahle-gehalt [self sp]
  (let [kb? (kann-bezahlen? (self :bank) (*gehaelter* (gehalts-zahlung sp)))
        zahlbetrag (if kb? (*gehaelter* (gehalts-zahlung sp))
                       (do (println "Bank ist pleite!" )(guthaben (self :bank))))
        [bank spieler] (ueberweise (self :bank) sp zahlbetrag)]
    (-> self 
        (assoc :bank (if kb? bank (s-pleite bank )))
        (assoc :spieler-liste
               (assoc (:spieler-liste self)
                      (:name spieler) (assoc spieler :gehalts-zahlung :kein-gehalt))))))

(defn spieler-kauft-strasse [self sp immo]
  (if (will-kaufen? sp immo)
    (let [[spieler bank] (ueberweise sp (:bank self) (kaufpreis immo))]
      (println  (name sp) " kauft " (feld-name immo))
      (-> self
          (assoc :spielbrett (neuer-eigentuemer (:spielbrett self) immo spieler))
          (assoc :bank bank) 
          (assoc :spieler-liste
                 (assoc (:spieler-liste self)
                        (:name spieler) (assoc spieler :aktion [])))))
    self))

;; falls sp pleite gegangen ist, werden die Immos von sp an die Bank zurück gegeben
(defn neuer-status [self sp]
  (if (pleite? sp)
    (assoc-in self [:spielbrett :felder]
              (mapv
               (fn [t] (if (= (t :eigentuemer) (name sp))
                         (assoc t :eigentuemer "Bank") t))
               (felder (:spielbrett self))))
    self))

(defn miet-zahlung [self sp feld]
  (println (name sp) " zahlt miete an " (eigentuemer feld))
  (let [kb? (kann-bezahlen? sp (miete feld))
        zahlbetrag (if kb? (miete feld)
                       (do (println (name sp) " ist pleite!" )(guthaben sp)))
        spz (if kb? sp (s-pleite sp)) 
        [sp1 sp2]
        (ueberweise spz 
                    ((:spieler-liste self) (eigentuemer feld))
                    zahlbetrag)] 
    (-> self
        (assoc-in [:spieler-liste (name sp)] sp1)
        (assoc-in [:spieler-liste (eigentuemer feld)] sp2)
        (neuer-status sp1))))

;; ein Spieler-Objekt ermittelt selbst, welche Aktion nach Betreten eines Feldes
;; auszuführen ist und speichert sie in seiner Ex.-Var. :aktion. Da nur der
;; Schiedsrichter über den erforderlichn Kontext verfügt, erfolgt das Ausführen
;; der Aktion hier
(defn fuehre-spieler-aktion-aus [self sp] 
  (cond
    (empty? (aktion sp)) self
    (= (first (aktion sp)) :kaufe)
    (spieler-kauft-strasse self sp ((aktion sp) 1))
    (= (first (aktion sp)) :zahle-miete)
    (miet-zahlung self sp ((aktion sp) 1))))

;; macht aus dem Spielernamen den Spieler
(defn spieler-an-der-reihe [self]
  ((self :spieler-liste) (self :an-der-Reihe)))

(defn der-naechste-an-der-reihe [self]
  (let [index-an-der-reihe (mod (+ (.indexOf (:spieler-reihenfolge self )
                                             (:an-der-Reihe self ))
                                   1)
                                (self :anzahl-spieler))
        s (assoc self :an-der-Reihe 
                 ((:spieler-reihenfolge self) index-an-der-reihe))]
    (if (pleite? (spieler-an-der-reihe s))
      (der-naechste-an-der-reihe s)
      (if (= 0 index-an-der-reihe)
        (do (println "Runde " (+ 1 (s :anzahl-runden)) " beginnt.")
            (assoc s :anzahl-runden (+ 1 (s :anzahl-runden))))
        s))))

(defn setze-spiel-fort-wenn-bank-nicht-pleite [self sp]
  (cond
    (not (pleite? (self :bank)))
    (-> self
        (fuehre-spieler-aktion-aus sp)
        (der-naechste-an-der-reihe))
    :else self))

(defn lass-spieler-an-der-reihe-ziehen [self] 
  (let [sp (gehe-auf (spieler-an-der-reihe self)
                     (neue-position (spieler-an-der-reihe self)
                                    (felder (:spielbrett self))))]
    (-> self
        (zahle-gehalt sp)
        (setze-spiel-fort-wenn-bank-nicht-pleite sp))))

(defn nur-noch-ein-spieler-zahlungsfaehig? [spieler-liste] 
  (<= (count (filter #(not (pleite? %)) (vals spieler-liste))) 1))

(defn spiel-beendet? [self]
  (or (> (self :anzahl-runden) *maximale-rundenanzahl*)
      (pleite? (:bank self))
      (nur-noch-ein-spieler-zahlungsfaehig? (:spieler-liste self))))

(defn spiel-ablauf [self]
  (loop [s self]
    (if (spiel-beendet? s)
      (do (println "Spiel zuende") s)
      (recur (lass-spieler-an-der-reihe-ziehen s)))))

(defn spielstand [self]
  (str
   (g-to-string (self :bank))
   (reduce str (map
                (fn [s] (g-to-string s))
                (vals (self :spieler-liste))))
   "an der Reihe ist: "  (self :an-der-Reihe) "\n"
   (to-string (self :spielbrett))))


(-> schiedsrichter
    (initialisiere) (verteile-startguthaben)
    (spiel-ablauf) (spielstand))

;; (-> schiedsrichter
;;     (initialisiere)
;;     (verteile-startguthaben)
;;     (lass-spieler-an-der-reihe-ziehen)
;;     (lass-spieler-an-der-reihe-ziehen)
;;     (lass-spieler-an-der-reihe-ziehen)
;;     (lass-spieler-an-der-reihe-ziehen)
;;     (lass-spieler-an-der-reihe-ziehen)
;;     (lass-spieler-an-der-reihe-ziehen)
;;     (lass-spieler-an-der-reihe-ziehen)
;;     (lass-spieler-an-der-reihe-ziehen)
;;     (lass-spieler-an-der-reihe-ziehen)
;;     (lass-spieler-an-der-reihe-ziehen)
;;     (lass-spieler-an-der-reihe-ziehen)
;;     (lass-spieler-an-der-reihe-ziehen)
;;     (lass-spieler-an-der-reihe-ziehen)
;;     (lass-spieler-an-der-reihe-ziehen)
;;     (lass-spieler-an-der-reihe-ziehen)
;;     (lass-spieler-an-der-reihe-ziehen)
;;     (lass-spieler-an-der-reihe-ziehen)
;;     (lass-spieler-an-der-reihe-ziehen)
;;     (spielstand))




