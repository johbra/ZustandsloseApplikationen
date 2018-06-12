(ns nonopoly
  (:require  [dosl2clj.core :refer :all]
             [nonopoly.nonopolytaler :refer :all]
             [nonopoly.spielbrett :refer :all]
             [nonopoly.guthaber :refer :all]
             [serializable.fn :as sf]))
(use 'clojure.pprint)

;; Hilfsfunktionen

;; wendet f auf alle values einer map m an
(defn map-function-on-map-vals [f m] 
  (zipmap (keys m) (map f (vals m))))

;; erzeugt zu Testzwecken drei Teilnehmer
(defn erzeuge-drei-spieler [pos] 
  {"Karl"  (Spieler :new {:name "Karl" :guthaben (nt 0)  :position pos}),
   "Klara" (Spieler :new {:name "Klara" :guthaben (nt 0) :position pos}),
   "Rosa"  (Spieler :new {:name "Rosa"  :guthaben (nt 0) :position pos})})

;; Schiedsrichter ermittelt neue Position eines Spielers mithilfe des Würfels
(defn neue-position [schdsrchtr splr]
  (let [alte-pos-nr ((splr :position) :position)
        neue-pos-nr (mod (+ alte-pos-nr (schdsrchtr :wuerfele)) 16)]
    (println alte-pos-nr " " neue-pos-nr)
    (((schdsrchtr :spielbrett) :felder)  neue-pos-nr)))

;; das Schiedsrichter-Objekt (singelton)
(defobj schiedsrichter
  {:spielbrett spielbrett ;import aus namespace spielbrett
   :bank nil
   :spieler-liste ()
   :spieler-reihenfolge [] ; Vektor mit den Spielernamen in der Würfelreihenfolge
   :an-der-Reihe nil} ; der Spieler, der als nächster an der Reihe ist
  ;;; Methoden
  {;; Erzeuge die Bank, drei Spieler, stelle sie auf Los und leg die Startreihen-
   ;; folge fest
   :initialisiere (fn []
                    (cascade self 
                             (:bank (Bank :new {:guthaben (nt 200000)}))
                             (:spieler-liste (erzeuge-drei-spieler
                                              ((spielbrett :felder) 0)))
                             (:leg-reihenfolge-fest ["Karl" "Rosa" "Klara"])))

   :wuerfele (fn [] (+ 1 (rand-int 6)))
   :leg-reihenfolge-fest (fn [lst]
                           (cascade self
                                    (:spieler-reihenfolge lst)
                                    (:an-der-Reihe (first lst))))
   :verteile-startguthaben
   (fn []
     ((self :bank (hebe-ab (self :bank)
                           ((nt 30000) :mul (count (self :spieler-liste)))))
      :spieler-liste (map-function-on-map-vals
                      (fn [t] (schreibe-gut t (nt 30000)))
                      (self :spieler-liste))))
   
   ;; sp wird Eigentuemer der Immobilie immo
   :neuerEigentuemer
   (fn [immo sp]
     (self :spielbrett ((self :spielbrett) :neuerEigentuemer immo sp)))
   
   ;; ein Spieler-Objekt ermittelt selbst, welche Aktion nach Betreten eines Feldes
   ;; auszuführen ist und speicher sie in seiner Ex.-Var. :aktion. Da nur der
   ;; Schiedsrichter über den erforderlichn Kontext verfügt, erfolgt das Ausführen
   ;; der Aktion hier
   :fuehre-spieler-aktion-aus
   (fn [sp]
     (cond
       (empty? (sp :aktion)) self
       (= (first (sp :aktion)) :kaufe)
       (self :spieler-kauft-strasse sp ((sp :aktion) 1))
       (= (first (sp :aktion)) :zahle-miete)
       (self :miet-zahlung sp ((sp :aktion) 1))))
   :spieler-kauft-strasse
   (fn [sp immo]
     (let [[spieler bank]
           (sp :ueberweise (self :bank) (immo :kaufpreis))]
       (println (sp :name) " kauft " (immo :name) ((spieler :guthaben) :to-string))
       (cascade self
                (:neuerEigentuemer immo sp)
                (:bank bank) 
                (:spieler-liste
                 (assoc (self :spieler-liste)
                        (spieler :name) (spieler :aktion []))))))
   :miet-zahlung
   (fn [sp  feld]
     (println (sp :name) " zahlt miete an " (feld :eigentuemer))
     (let
         [ [sp1 sp2]
          (sp :ueberweise
              ((self :spieler-liste) (feld :eigentuemer))
              (feld :miete))]
       (self
        :spieler-liste
        (assoc (self :spieler-liste) (sp :name) sp1
               (feld :eigentuemer) sp2))))
   :der-naechste-an-der-reihe
   (fn []
     (self :an-der-Reihe
           ((self :spieler-reihenfolge)
            (mod (+ (.indexOf (self :spieler-reihenfolge)
                              (self :an-der-Reihe))
                    1) 3))))
   ;; macht aus dem Spielernamen den Spieler
   :spieler-an-der-reihe 
   (fn [] ((self :spieler-liste) (self :an-der-Reihe)))
   :lass-spieler-an-der-reihe-ziehen
   (fn []
     (let [sp ((self :spieler-an-der-reihe)
               :gehe-auf (neue-position self (self :spieler-an-der-reihe)))]
       ((self :fuehre-spieler-aktion-aus sp)
        :der-naechste-an-der-reihe)))
   :spielstand (fn [] (str
                       ((self :bank) :to-string)
                       (reduce str (map
                                    (fn [s] (s :to-string))
                                    (vals (self :spieler-liste))))
                       "an der Reihe ist: "  (self :an-der-Reihe) "\n"
                       ((self :spielbrett) :to-string)))})

(cascade schiedsrichter
         :initialisiere 
         :verteile-startguthaben 
         :lass-spieler-an-der-reihe-ziehen 
         :lass-spieler-an-der-reihe-ziehen
         :lass-spieler-an-der-reihe-ziehen 
         :lass-spieler-an-der-reihe-ziehen
         :lass-spieler-an-der-reihe-ziehen
         :lass-spieler-an-der-reihe-ziehen
         :lass-spieler-an-der-reihe-ziehen
         :lass-spieler-an-der-reihe-ziehen
         :lass-spieler-an-der-reihe-ziehen
         :lass-spieler-an-der-reihe-ziehen
         :lass-spieler-an-der-reihe-ziehen
         :lass-spieler-an-der-reihe-ziehen
         :lass-spieler-an-der-reihe-ziehen
         :lass-spieler-an-der-reihe-ziehen
         :lass-spieler-an-der-reihe-ziehen
         :lass-spieler-an-der-reihe-ziehen
         :lass-spieler-an-der-reihe-ziehen
         :lass-spieler-an-der-reihe-ziehen
         :spielstand)





