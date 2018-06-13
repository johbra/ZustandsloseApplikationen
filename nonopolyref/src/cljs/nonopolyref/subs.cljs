(ns nonopolyref.subs
  (:require
   [re-frame.core :as re-frame]
   [nonopolyfulc.core :as nop]))

(re-frame/reg-sub
 ::name
 (fn [db]
   "NoNopoly";; (:name db)
   ))

(re-frame/reg-sub
 :spielstand
 (fn [db _]
   (nop/spielstand db)))

(re-frame/reg-sub
 :status
 (fn [db _]
   (if (nop/spiel-beendet? db) "Spiel beendet" "Spiel läuft")))

