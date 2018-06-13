(ns nonopolyref.events
  (:require
   [re-frame.core :as re-frame]
   [nonopolyref.db :as db]
   [nonopolyfulc.core :as nop]))


(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(def allowed-keys (nop/ACTIONS :allowed-keys)) 

(defn build-button-events
  "abgeleitet aus den in nonopolyful.core defitinierten ACTIONS"
  []
  (let [allowed-keys (nop/ACTIONS :allowed-keys)
        ]
    (doseq [[key action] allowed-keys] 
      (re-frame/reg-event-db
       (keyword action)
       (fn [db _]
         ((nop/ACTIONS :on-key) db key))))))

(build-button-events)
