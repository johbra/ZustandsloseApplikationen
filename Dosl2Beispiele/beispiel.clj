(ns dosl2clj.nonopoly
  (:require [dosl2clj.core :refer :all]))

;; "Anwendung" Mitarbeiter und Abteilungen
(defobj karl {:name "Karl" :gehalt 0} {})
(karl :kappa 'Mitarbeiter)
(def klara (Mitarbeiter :new {:name "Klara"}))
(klara :data) ;; => {:name "Klara", :gehalt 0}
(def rosa (Mitarbeiter :new {:name "Rosa"}))
(rosa :data) ;; => {:name "Rosa", :gehalt 0}

(defobj einkauf
  {:mitarbeiters (list karl rosa klara)}
  {:die-namen-der-mitarbeiter (fn [] ((apply juxt (self :mitarbeiters)) :name))})
(einkauf :mitarbeiters)
;; => (#function[dosl2clj.nonopoly/fn--10816/self--9952--auto----10817]
;;     #function[dosl2clj.nonopoly/eval10828/fn--10830/self--9952--auto----10832]
;;     #function[dosl2clj.nonopoly/eval10798/fn--10800/self--9952--auto----10802])
(einkauf :die-namen-der-mitarbeiter)  ;; => ["Karl" "Rosa" "Klara"]

;; Anmerkung: Die Definition der Methode :die-namen-der-mitarbeiter+ besitzt einen funktionalen Charakter,
;; indem sie zwei typische Funktionen höherer Ordnung (apply und juxt) benutzt. Hier wird also in einer
;; "OO-Umgebung" von den Möglichkeiten der (funktionale) Wirtssprache Gebrauch gemacht. Das ist hier in
;; einfacher Weise möglich, weil die hinter der Exemplarvariablen :mitarbeiters eine Standard-Datenstruktur
;; von Clojure, die Liste steht.

;; Möchte man diese Vermischung von OOP und FP vermeiden, könnte man mithilfe der DOSL eine objektorientierte
;; Listen-Struktur definieren, z. B. wie folgt:

(def Lst 'Lst)

((obj {:lst ()} {:cons
                 (fn [elem] (Lst :new {:lst (cons elem (self :lst))}))
                 :first
                 (fn [] (first (self :lst)))
                 :rest
                 (fn [] (rest (self :lst)))
                 :map
                 (fn [fkt] (Lst :new {:lst (map fkt (self :lst))}))
                 :list
                 (fn [& elems] (Lst :new {:lst (first (list elems))}))
                 :collect
                 (fn [msg] (into () ((apply juxt (self :lst)) msg)))})
 :kappa 'Lst)
(((((Lst :new) :cons 1) :cons 2) :cons 3) :lst)            ;; => (3 2 1)
(((((Lst :new) :cons 1) :cons 2) :cons 3) :first)          ;; => 3
(((((Lst :new) :cons 1) :cons 2) :cons 3) :rest)           ;; => (2 1)
((((((Lst :new) :cons 1) :cons 2) :cons 3) :map inc) :lst) ;; => (4 3 2)
(((Lst :new) :list 3 2 1) :lst)                            ;; => (3 2 1)

;; Mithilfe der Klasse Lst könnte das Objekt einkauf wie folgt umgeschrieben werden:

(defobj einkauf-
  {:mitarbeiters ((Lst :new) :list karl rosa klara)}
  {:die-namen-der-mitarbeiter (fn [] ((self :mitarbeiters) :collect :name ))})
(einkauf- :mitarbeiters)
;; => #function[dosl2clj.nonopoly/eval12272/fn--12274/self--9952--auto----12276] (Exempl. von Lst)
((einkauf- :mitarbeiters) :lst)
;; => (#function[dosl2clj.nonopoly/fn--10816/self--9952--auto----10817]
;;     #function[dosl2clj.nonopoly/eval10828/fn--10830/self--9952--auto----10832]
;;     #function[dosl2clj.nonopoly/eval10798/fn--10800/self--9952--auto----10802])
(einkauf- :die-namen-der-mitarbeiter)  ;; => ("Klara" "Rosa" "Karl")

;; Anmerkung: Die Implementierung von :die-namen-der-mitarbeiter verwendet nur noch den message
;; passing style. Die funktionale Implementierung von :collect ist in der Klasse Lst verborgen

;; DISKUSSION
;; Wie weit soll man die "Objektifizierung" treiben?
;; Ist das überhaupt sinnvoll

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Wie würde der Clojurian das obige "Problem" lösen? Etwa so:
(def karla {:name "Karla" :gehalt 0} )
karla ;; => {:name "Karla", :gehalt 0}
(def franz (assoc karla :name "Franz"))
franz ;; => {:name "Franz", :gehalt 0}
(def eva (assoc karla :name "Eva"))
eva   ;; => {:name "Eva", :gehalt 0}

(def einkauf-c
  {:mitarbeiters [karla franz eva]})
einkauf-c ;; => {:mitarbeiters [{:name "Karla", :gehalt 0} {:name "Franz", :gehalt 0} {:name "Eva", :gehalt 0}]}

(defn die-namen-der-mitarbeiter [abt]
  ((apply juxt (:mitarbeiters abt)) :name))
(die-namen-der-mitarbeiter einkauf-c) ;; => ["Karla" "Franz" "Eva"]

(assoc-in einkauf-c [:mitarbeiters 1 :gehalt]  2000)
;; => {:mitarbeiters [{:name "Karla", :gehalt 0} {:name "Franz", :gehalt 2000} {:name "Eva", :gehalt 0}]}
