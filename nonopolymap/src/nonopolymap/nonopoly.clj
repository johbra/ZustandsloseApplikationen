(ns nonopolymap
  (:require [nonopolymap.feld :refer :all :rename {to-string f-to-string}]
            [nonopolymap.guthaber :refer :all :rename {to-string g-to-string} ]
            [nonopolymap.spielbrett :refer :all ]))
(use 'clojure.pprint)

;; Hilfsfunktionen

;; wendet f auf alle values einer map m an
(defn map-function-on-map-vals [f m] 
  (zipmap (keys m) (map f (vals m))))

;;; Hilfsfunktionen
(defn erzeuge-drei-spieler [feld] 
  {"Karl"  (->Spieler "Karl" feld),
   "Klara" (->Spieler "Klara" feld),
   "Rosa"  (->Spieler "Rosa" feld)})


;; ;; das Schiedsrichter-"Objekt"
(def schiedsrichter
  {:bank nil
   :spieler-liste ()
   :spieler-reihenfolge [] ; Vektor mit den Spielernamen in der Würfelreihenfolge}
   :an-der-Reihe nil ; der Spieler, der als nächster an der Reihe ist
   :spielbrett spielbrett})

;;Erzeuge die Bank, drei Spieler, stelle sie auf Los und leg die Startreihen-
;; folge fest
(defn initialisiere [schiri]
  (-> schiri 
      (assoc :bank (->Bank "Bank" (nt 200000)))
      (assoc :spieler-liste (erzeuge-drei-spieler ((felder spielbrett) 0)))
      (assoc :spieler-reihenfolge ["Karl" "Rosa" "Klara"])
      (assoc :an-der-Reihe "Karl")))

(defn verteile-startguthaben [schiri]
  (-> schiri
      (assoc :bank (hebe-ab (:bank schiri)
                            (mul (nt 30000)
                                 (count (:spieler-liste schiri )))))
      (assoc :spieler-liste
             (map-function-on-map-vals
              (fn [t] (schreibe-gut t (nt 30000)))
              (:spieler-liste schiri)))))

(defn spieler-kauft-strasse [schiri sp immo]
  (let [[spieler bank]
        (ueberweise sp (:bank schiri) (kaufpreis immo))]
    (println  (name sp) " kauft " (feld-name immo))
    (-> schiri
        (assoc :spielbrett (neuer-eigentuemer (:spielbrett schiri) immo spieler))
        (assoc :bank bank) 
        (assoc-in [:spieler-liste (:name spieler) :aktion] []))))

(defn miet-zahlung [schiri sp feld]
  (println (name sp) " zahlt miete an " (eigentuemer feld))
  (let
      [ [sp1 sp2]
       (ueberweise sp 
                   ((:spieler-liste schiri) (eigentuemer feld))
                   (miete feld))]
    (-> schiri
        (assoc-in [:spieler-liste (name sp)] sp1)
        (assoc-in [:spieler-liste (eigentuemer feld)] sp2))))


;; ein Spieler-Objekt ermittelt selbst, welche Aktion nach Betreten eines Feldes
;; auszuführen ist und speichert sie in seiner Ex.-Var. :aktion. Da nur der
;; Schiedsrichter über den erforderlichn Kontext verfügt, erfolgt das Ausführen
;; der Aktion hier
(defn fuehre-spieler-aktion-aus [schiri sp] 
  (cond
    (empty? (aktion sp)) schiri
    (= (first (aktion sp)) :kaufe)
    (spieler-kauft-strasse schiri sp ((aktion sp) 1))
    (= (first (aktion sp)) :zahle-miete)
    (miet-zahlung schiri sp ((aktion sp) 1))))

(defn der-naechste-an-der-reihe [schiri]
  (assoc schiri :an-der-Reihe
         ((:spieler-reihenfolge schiri) 
          (mod (+ (.indexOf (:spieler-reihenfolge schiri )
                            (:an-der-Reihe schiri ))
                  1) 3))))

;; macht aus dem Spielernamen den Spieler
(defn spieler-an-der-reihe [schiri]
  ((schiri :spieler-liste) (schiri :an-der-Reihe)))

(defn lass-spieler-an-der-reihe-ziehen [schiri]
  (let [sp (gehe-auf (spieler-an-der-reihe schiri)
                     (neue-position (spieler-an-der-reihe schiri)
                                    (felder (schiri :spielbrett ))))]
    (-> schiri
        (fuehre-spieler-aktion-aus sp)
        (der-naechste-an-der-reihe))))


(defn spielstand [schiri]
  (str
   (g-to-string (schiri :bank))
   (reduce str (map
                (fn [s] (g-to-string s))
                (vals (schiri :spieler-liste))))
   "an der Reihe ist: "  (schiri :an-der-Reihe) "\n"
   (to-string(schiri :spielbrett))))

(-> schiedsrichter
    (initialisiere)
    (verteile-startguthaben)
    (lass-spieler-an-der-reihe-ziehen)
    (lass-spieler-an-der-reihe-ziehen)
    (lass-spieler-an-der-reihe-ziehen)
    (lass-spieler-an-der-reihe-ziehen)
    (lass-spieler-an-der-reihe-ziehen)
    (lass-spieler-an-der-reihe-ziehen)
    (lass-spieler-an-der-reihe-ziehen)
    (lass-spieler-an-der-reihe-ziehen)
    (lass-spieler-an-der-reihe-ziehen)
    (lass-spieler-an-der-reihe-ziehen)
    (lass-spieler-an-der-reihe-ziehen)
    (lass-spieler-an-der-reihe-ziehen)
    (lass-spieler-an-der-reihe-ziehen)
    (lass-spieler-an-der-reihe-ziehen)
    (lass-spieler-an-der-reihe-ziehen)
    (lass-spieler-an-der-reihe-ziehen)
    (lass-spieler-an-der-reihe-ziehen)
    (lass-spieler-an-der-reihe-ziehen)
    (spielstand))





