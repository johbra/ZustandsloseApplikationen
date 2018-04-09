(ns nonopolyclj.guthaber
  (:require [nonopolyclj.feld :refer :all :rename {to-string f-to-string}]))

(defprotocol Printable
  (to-string [self]))

;;; Guthaben
(defrecord Guthaben [wert]
  Printable
  (to-string [self] (str (:wert self) " nt")))

(def nt ->Guthaben)
(defn sub [self betrag] (nt (- (:wert self ) (:wert betrag) )))
(defn add [self betrag] (nt (+ (:wert self ) (:wert betrag) )))
(defn mul [self faktor] (nt (* (:wert self ) faktor )))

;;; Guthaber

(defprotocol Zahlungsverkehr
  (hebe-ab [ self betrag])
  (schreibe-gut [self betrag])
  (ueberweise [gh-von gh-an betrag]))

(defprotocol Positionierbar
  (feld [self])
  (name [self])
  (aktion [self])
  (guthaben [self])
  (gehe-auf [self feld])
  (neue-position [self felder]))

(def zahlungsverkehr
  {:hebe-ab (fn [self betrag] (update-in self [:guthaben] sub betrag))
   :schreibe-gut (fn [self betrag] (update-in self [:guthaben] add betrag))
   :ueberweise (fn [gh-von gh-an betrag]
                 [(hebe-ab gh-von betrag)(schreibe-gut gh-an betrag)])})

(defrecord Spieler [name guthaben feld aktion]
  Printable
  (to-string [self] (println-str "SpielerIn " (:name self) " "
                                 (to-string (:guthaben self) )
                                 " steht auf "
                                 (f-to-string (:feld self))))
  Positionierbar
  (name [self] (:name self))
  (feld [self] (:feld self))
  (aktion [self] (:aktion self))
  (guthaben [self] (:guthaben self))
  ;; Spieler betritt ein Feld, Aktion wird ermittelt
  (gehe-auf [self feld]
    (let [sp (assoc self :feld feld)
          spn (cond (verfuegbar feld) (assoc sp :aktion [:kaufe feld])
                    (verkauft feld) (assoc sp :aktion [:zahle-miete feld])
                    :else sp)] ;tue nichts
      spn))
  ;; ermittelt neue Position eines Spielers mithilfe des Würfels
  (neue-position [self felder]
    (let [wuerfele (fn [] (+ 1 (rand-int 6)))
          alte-pos-nr (position (:feld self))
          neue-pos-nr (mod (+ alte-pos-nr (wuerfele)) 16)]
      (println alte-pos-nr " " neue-pos-nr)
      (felder neue-pos-nr))))


(extend Spieler
  Zahlungsverkehr zahlungsverkehr)

(defrecord Bank [name guthaben]
  Printable
  (to-string [self] (println-str "Bankguthaben: "
                                 (to-string (:guthaben self)))))

(extend Bank
  Zahlungsverkehr zahlungsverkehr) 

