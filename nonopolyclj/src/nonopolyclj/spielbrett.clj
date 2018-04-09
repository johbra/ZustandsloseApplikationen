(ns nonopolyclj.spielbrett
  (:require [nonopolyclj.feld :refer :all :rename {to-string f-to-string
                                                   name f-name}]
            [nonopolyclj.guthaber :refer :all :rename {to-string g-to-string}]))

(defprotocol PSpielbrett
  (neuer-eigentuemer [self immo sp])
  (to-string [self])
  (felder [self]))

(defrecord Spielbrett [felder]
  PSpielbrett
  (neuer-eigentuemer [self immo sp] 
    (let [feld (s-eigentuemer immo (name sp))]
      (assoc self :felder (update (:felder self ) (position immo ) (fn [_]feld)))))
  (to-string [self] (str 
                     (reduce str (map
                                  (fn [s] (f-to-string s))
                                  (:felder self)))))
  (felder [self] (:felder self)))

(def spielbrett
  (->Spielbrett
   [
    (->Feld  0   "Los")
    (->Immo (->Feld 1   "A-Straße") (nt 1000)  (nt 100)  "Bank")
    (->Immo (->Feld 2   "Nordbahnhof") (nt 1000)  (nt 100)  "Bank")
    (->Immo (->Feld 3   "B-Straße") (nt 1000)  (nt 100)  "Bank")
    (->Feld  4   "Gefängnis")
    (->Immo (->Feld 5   "C-Straße") (nt 1000)  (nt 100)  "Bank")
    (->Immo (->Feld 6   "Wasserwerk") (nt 1000)  (nt 100)  "Bank")
    (->Immo (->Feld 7   "D-Straße") (nt 1000)  (nt 100)  "Bank")
    (->Feld  8   "Frei parken")
    (->Immo (->Feld 9   "E-Straße") (nt 1000)  (nt 100)  "Bank")
    (->Immo (->Feld 10   "Südbahnhof") (nt 1000)  (nt 100)  "Bank")
    (->Immo (->Feld 11   "F-Straße") (nt 1000)  (nt 100)  "Bank")
    (->Feld  12   "Polizist")
    (->Immo (->Feld 13   "G-Straße") (nt 1000)  (nt 100)  "Bank")
    (->Immo (->Feld 14   "E-Werk") (nt 1000)  (nt 100)  "Bank")
    (->Immo (->Feld 15   "H-Straße") (nt 1000)  (nt 100)  "Bank")
    ]))

;; (to-string spielbrett)
