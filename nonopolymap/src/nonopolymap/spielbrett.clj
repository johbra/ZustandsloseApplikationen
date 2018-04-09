(ns nonopolymap.spielbrett
  (:require [nonopolymap.feld :refer :all :rename {to-string f-to-string
                                                   name f-name}]
            [nonopolymap.guthaber :refer :all :rename {to-string g-to-string}]))

;; Konstruktor

(defn ->Spielbrett [felder] {:felder felder})

;; Getter
(defn felder [self] (:felder self))

;; weitere "Methoden"
(defn to-string [self]
  (str 
   (reduce str (map
                (fn [s] (f-to-string s))
                (:felder self)))))

(defn neuer-eigentuemer [self immo sp]
  (let [feld (s-eigentuemer immo (name sp))]
    (assoc self :felder (update (:felder self ) (position immo ) (fn [_]feld)))))

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
