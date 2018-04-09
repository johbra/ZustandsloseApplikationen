(ns nonopolyful.guthaber
  (:require [nonopolyful.feld :refer :all :rename {to-string f-to-string}]
            [nonopolyful.spielbrett :refer :all :rename {to-string s-to-string}]
            [nonopolyful.taler :refer :all :rename {to-string t-to-string}])) 

;;;;;;;;;;;;;
;; Guthaber;;
;;;;;;;;;;;;;

;; Konstruktoren

(defn ->Spieler [name feld]
  {:name name :guthaben (nt 0) :pleite? false :feld feld :aktion [] :gehalts-zahlung :kein-gehalt :type :spieler})

(defn ->Bank [name guthaben]
  {:name name :guthaben guthaben :pleite? false :type :bank})

;; Getter
(defn name [self] (:name self))
(defn guthaben [self] (:guthaben self))
(defn feld [self] (:feld self))
(defn aktion [self] (:aktion self))
(defn pleite? [self] (:pleite? self))
(defn gehalts-zahlung [self] (:gehalts-zahlung self))

;; Setter
(defn s-pleite [self] (assoc self :pleite? true))
(defn s-aktion [self aktion] (assoc self :aktion aktion))
(defn s-gehalts-zahlung [self zahlung] (assoc self :gehalts-zahlung zahlung))
(defn s-feld [self feld] (assoc self :feld feld))
(defn loesche-aktion [self] (s-aktion self []))

;; Zahlungsverkehr
(defn hebe-ab [self betrag] (update-in self [:guthaben] sub betrag))
(defn schreibe-gut [self betrag] (update-in self [:guthaben] add betrag))
(defn ueberweise [gh-von gh-an betrag]
  [(hebe-ab gh-von betrag)(schreibe-gut gh-an betrag)])

;; Spieler prüft, ob er eine Zahlung leisten könnte
(defn kann-bezahlen? [self betrag]
  (gr-or-eq? (:guthaben self) betrag))

;; Spieler prüft, ob für ihn Gehaltszahlung fällig
(defn gehalt-faellig-fuer? [self]
  (not (= (gehalts-zahlung self) :kein-gehalt)))

;; Aktionen
(defn kauf-aktion? [self] (= (first (aktion self)) :kaufe))
(defn miet-zahlung?  [self] (= (first (aktion self)) :zahle-miete))

;; wandelt Guthaber in Zeichenkette um
(defn to-string [self]
  (let [f-map {:bank (fn [self] (println-str "Bankguthaben: "
                                             (t-to-string (:guthaben self))))
               :spieler (fn [self] (println-str "SpielerIn " (:name self) " "
                                                (t-to-string (:guthaben self))
                                                " steht auf "
                                                (feld-name (:feld self))
                                                (if (self :pleite?)
                                                  " pleite" " aktiv")))}]
    ((f-map (:type self)) self)))

;;;;;;;;;;;;;
;; Aktionen;;
;;;;;;;;;;;;;

;; Spieler prüft, ob er eine Immo kaufen will/kann
(defn will-kaufen? [self immo]
  (kann-bezahlen? self (kaufpreis immo)))

;; Spieler prüft, ob ihm Gehalt zusteht und wenn ja, wie viel
(defn bestimme-gehaltszahlung [self feld]
  (s-gehalts-zahlung self
                     (cond
                       (= (feld-name feld) "LOS") :bonus-gehalt
                       (< (position feld) (position (self :feld))) :grund-gehalt
                       :else :kein-gehalt)))

;; Spieler betritt ein Feld, Aktion wird ermittelt
(defn gehe-auf [self feld]
  (let [sp1 (s-feld self feld) 
        spn (cond (verfuegbar feld) (s-aktion sp1 [:kaufe feld])
                  
                  (and (verkauft feld) (not (= (eigentuemer feld) (name self))))
                  (s-aktion sp1 [:zahle-miete feld])

                  :else sp1)] ;tue nichts
    spn))

;; ermittelt neue Position eines Spielers mithilfe des Würfels
(defn neue-position [self felder]
  (let [wuerfele (fn [] (+ 1 (rand-int 6)))
        alte-pos-nr (position (feld self))
        neue-pos-nr (mod (+ alte-pos-nr (wuerfele)) 16)]
    (println (name self) " geht auf " (feld-name (felder neue-pos-nr)))
    (felder neue-pos-nr)))

;; self überweist Miete für feld oder Restguthaben an empfaenger
(defn zahle-miete [self feld empfaenger]
  (let [kb? (kann-bezahlen? self (miete feld))
        zahlbetrag (if kb? (miete feld)
                       (do (println (name self) " ist pleite!" )(guthaben self)))
        spz (if kb? self (s-pleite self))]
    (ueberweise spz empfaenger zahlbetrag)))


;; Beipiele
;; (to-string (mul (add (nt 3) (nt 4)) 5))

;; (def karl (->Spieler "Karl" "feld"))

;; (def bank {:name "Bank" :guthaben (nt 0) :type :bank})

;; (to-string bank)
;; (to-string karl)
;; (to-string (nt 5))
;; (ueberweise karl bank (nt 100))
;; (name (->Spieler "karl" "feld"))
;; (:type karl)
