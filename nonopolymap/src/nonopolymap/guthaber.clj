(ns nonopolymap.guthaber
  (:require [nonopolymap.feld :refer :all :rename {to-string f-to-string}]))

;;; Guthaben

(defn nt [wert] {:wert wert :type :guthaben})
(defn sub [self betrag] (nt (- (:wert self ) (:wert betrag) )))
(defn add [self betrag] (nt (+ (:wert self ) (:wert betrag) )))
(defn mul [self faktor] (nt (* (:wert self ) faktor )))

;;; Guthaber

;; Konstruktoren
(defn ->Spieler [name feld]
  {:name name :guthaben (nt 0) :feld feld :aktion [] :type :spieler})

(defn ->Bank [name guthaben]
  {:name name :guthaben guthaben :type :bank})

;; Getter
(defn name [self] (:name self))
(defn guthaben [self] (:guthaben self))
(defn feld [self] (:feld self))
(defn aktion [self] (:aktion self))

;;zahlungsverkehr
(defn hebe-ab [self betrag] (update-in self [:guthaben] sub betrag))
(defn schreibe-gut [self betrag] (update-in self [:guthaben] add betrag))
(defn ueberweise [gh-von gh-an betrag]
  [(hebe-ab gh-von betrag)(schreibe-gut gh-an betrag)])

;; Spieler betritt ein Feld, Aktion wird ermittelt
(defn gehe-auf [self feld]
  (let [sp (assoc self :feld feld)
        spn (cond (verfuegbar feld) (assoc sp :aktion [:kaufe feld])
                  (verkauft feld) (assoc sp :aktion [:zahle-miete feld])
                  :else sp)] ;tue nichts
    spn))

(defn to-string [self]
  (let [f-map {:bank (fn [self] (println-str "Bankguthaben: "
                                             (to-string (:guthaben self))))
               :spieler (fn [self] (println-str "SpielerIn " (:name self) " "
                                                (to-string (:guthaben self) )
                                                " steht auf "
                                                "einem Feld"))
               :guthaben (fn [self] (str (:wert self) " nt"))}]
    ((f-map (:type self)) self)))

;; ermittelt neue Position eines Spielers mithilfe des Würfels
(defn neue-position [self felder]
  (let [wuerfele (fn [] (+ 1 (rand-int 6)))
        alte-pos-nr (position (feld self))
        neue-pos-nr (mod (+ alte-pos-nr (wuerfele)) 16)]
    (println (name self) " geht auf " (feld-name (felder neue-pos-nr)))
    (felder neue-pos-nr)))


;; Beipiele
;; (to-string (mul (add (nt 3) (nt 4)) 5))

;; (def karl (->Spieler "Karl"))

;; (def bank {:name "Bank" :guthaben (nt 0) :type :bank})

;; (to-string bank)
;; (to-string karl)
;; (to-string (nt 5))
;; (ueberweise karl bank (nt 100))
;; (guthaben (->Spieler "karl" "feld"))
