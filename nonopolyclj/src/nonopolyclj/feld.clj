(ns nonopolyclj.feld)

(defprotocol Feldbasis
  (feld-name [self])
  (position [self])
  (kaufpreis [self])
  (verkauft [self] )
  (verfuegbar [self])
  (to-string [self]))

(def feldbasis
  {:feld-name (fn [self] (:name self))
   :position (fn [self] (:position self))
   :verkauft (fn [self]  false)
   :verfuegbar (fn [self] false)
   :to-string (fn [self] (println-str (:name self )))})

(defrecord Feld [position name]) 

(extend Feld
  Feldbasis feldbasis)

(defprotocol Immobasis
  (miete [self])
  (eigentuemer [self])
  (s-eigentuemer [self sp-name])
  (kaufpreis [self]))

(def immobasis
  {:miete (fn [self] (:miete self))
   :kaufpreis (fn [self] (:kaufpreis self))
   :eigentuemer (fn [self] (:eigentuemer  self))
   :s-eigentuemer (fn [self sp-name] (assoc self :eigentuemer sp-name))})

(defrecord Immo [feld kaufpreis miete eigentuemer])

(extend Immo
  Feldbasis
  (merge feldbasis
         {:feld-name (fn [self] (feld-name (:feld self)))
          :position (fn [self] (position (:feld self))) 
          :verfuegbar (fn [self] (= (:eigentuemer self) "Bank"))
          :verkauft (fn [self] (not (verfuegbar self)))
          :to-string (fn [self] (println-str (feld-name self ) " gehört "
                                             (:eigentuemer self )))})
  Immobasis immobasis) 

;; (to-string (->Feld  0   "Los"))
;; (to-string (->Immo (->Feld 1   "A-Straße") (nt 1000)  (nt 100)  "Bank"))
;; (gh/to-string (miete (->Immo (->Feld 1   "A-Straße") (nt 1000)  (nt 100)  "Bank")))
;; (verfuegbar (->Immo (->Feld 1   "A-Straße") 100   100  "Bank"))
;; (verfuegbar (->Feld  0   "Los"))
;; (verkauft (->Immo (->Feld 1   "A-Straße") 100   100  "Bank"))
;; (verkauft (->Immo (->Feld 1   "A-Straße") 100   100  ""))
;; (verkauft (->Feld  0   "Los"))
