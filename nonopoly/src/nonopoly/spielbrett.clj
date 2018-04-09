(ns nonopoly.spielbrett
  (:require [dosl2clj.core :refer :all]
            [nonopoly.nonopolytaler :refer :all]
            [serializable.fn :as sf]))

((obj {:position  0 :name "Feld" }
      {:to-string (fn [] (println-str (self :name) ))
       :verfuegbar (fn [] false)
       :verkauft (fn [] false)})
 :kappa 'Feld)

((obj { :kaufpreis (nt 0) :miete (nt 0) :eigentuemer "" }
      {:to-string (fn [] (println-str (self :name) " gehört "
                                      (self :eigentuemer)))
       :verfuegbar (fn [] (= (self :eigentuemer) "Bank"))
       :verkauft (fn [] (not (self :verfuegbar)))})
 :kappa 'Immobilie 'Feld)

((obj {}{}) :kappa 'Strasse 'Immobilie)
((obj {}{}) :kappa 'Bahnhof 'Immobilie)
((obj {}{}) :kappa 'Werk 'Immobilie)

(defobj spielbrett
  {:felder
   [
    ( Feld :new {:position 0 :name "Los"})
    ( Strasse :new {:position 1 :name "A-Straße"
                    :kaufpreis (nt 1000) :miete (nt 100) :eigentuemer "Bank"})
    ( Bahnhof :new {:position 2 :name "Nordbahnhof"
                    :kaufpreis (nt 1000) :miete (nt 100) :eigentuemer "Bank"})
    ( Strasse :new {:position 3 :name "B-Straße"
                    :kaufpreis (nt 1000) :miete (nt 100) :eigentuemer "Bank"})
    ( Feld :new {:position 4 :name "Gefängnis"})
    ( Strasse :new {:position 5 :name "C-Straße"
                    :kaufpreis (nt 1000) :miete (nt 100) :eigentuemer "Bank"})
    ( Werk :new {:position 6 :name "Wasserwerk"
                 :kaufpreis (nt 1000) :miete (nt 100) :eigentuemer "Bank"})
    ( Strasse :new {:position 7 :name "D-Straße"
                    :kaufpreis (nt 1000) :miete (nt 100) :eigentuemer "Bank"})
    ( Feld :new {:position 8 :name "Frei parken"})
    ( Strasse :new {:position 9 :name "E-Straße"
                    :kaufpreis (nt 1000) :miete (nt 100) :eigentuemer "Bank"})
    ( Bahnhof :new {:position 10 :name "Südbahnhof"
                    :kaufpreis (nt 1000) :miete (nt 100) :eigentuemer "Bank"})
    ( Strasse :new {:position 11 :name "F-Straße"
                    :kaufpreis (nt 1000) :miete (nt 100) :eigentuemer "Bank"})
    ( Feld :new {:position 12 :name "Polizist"})
    ( Strasse :new {:position 13 :name "G-Straße"
                    :kaufpreis (nt 1000) :miete (nt 100) :eigentuemer "Bank"})
    ( Werk :new {:position 14 :name "E-Werk"
                 :kaufpreis (nt 1000) :miete (nt 100) :eigentuemer "Bank"})
    ( Strasse :new {:position 15 :name "H-Straße"
                    :kaufpreis (nt 1000) :miete (nt 100) :eigentuemer "Bank"})
    ]}
  {:neuerEigentuemer
   (fn [immo sp]
     (let [feld (immo :eigentuemer (sp :name))]
       (self :felder (update (self :felder)  (immo :position) (fn [_]feld)))))
   :to-string (fn [] (str 
                      (reduce str (map
                                   (fn [s] (s :to-string))
                                   (self :felder)))))})
