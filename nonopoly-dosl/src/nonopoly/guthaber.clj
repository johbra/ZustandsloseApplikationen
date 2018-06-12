(ns nonopoly.guthaber
  (:require [dosl2clj.core :refer :all]
            [nonopoly.nonopolytaler :refer :all]
            [serializable.fn :as sf]))

;; Guthaber
((obj {:guthaben (nt 0) }
      {;; liefert Vektor mit den am Überweisungsvorgang beteilitgen Guthabern
       :ueberweise
       (fn [spa betrag]
         [(hebe-ab self betrag) (schreibe-gut spa betrag)])})
 :kappa 'Guthaber)

;;; Hilfsfunktionen
(defn hebe-ab [konto betrag]
  (konto :guthaben ((konto :guthaben) :sub betrag)))
(defn schreibe-gut [konto betrag]
  (konto :guthaben ((konto :guthaben) :add betrag)))

;; Bank
((obj {:name "Bank"}
      {:to-string
       (fn [] (println-str "Bank-Guthaben: "
                           ((self :guthaben) :to-string)))}) 
 :kappa 'Bank 'Guthaber)

;; Spieler
((obj {:name "Karl" :guthaben (nt 0) :position 0 :aktion []}
      {:to-string
       (fn [] (println-str "SpielerIn " (self :name) " "
                           ((self :guthaben) :to-string)
                           " steht auf "
                           ((self :position) :to-string)))
       ;; Spieler betritt ein Feld, Aktion wird ermittelt
       :gehe-auf
       (fn [feld]
         (let [sp (self :position feld)
               spn (cond (feld :verfuegbar) (sp :aktion [:kaufe feld])
                         (feld :verkauft) (sp :aktion [:zahle-miete feld])
                         :else sp)] ;tue nichts
           spn))})
 :kappa 'Spieler 'Guthaber)

