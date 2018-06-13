(ns nonopolyref.views
  (:require
   [re-frame.core :as re-frame]
   [nonopolyref.subs :as subs]
   [nonopolyfulc.core :as nop] 
   ))

(defn spielstand
  []
  [:div.spielstand
   "Spielstand: "
   @(re-frame/subscribe [:spielstand])] 
  )

(defn status
  []
  [:div.spielstand
   "Status: "
   @(re-frame/subscribe [:status])] 
  )

(defn schaltflaechen
  "abgeleitet aus den in nonopolyful.core defitinierten ACTIONS"
  []
  (let [allowed-keys (nop/ACTIONS :allowed-keys)]
    (map (fn [e] 
           [:button {:onClick  #(re-frame/dispatch [(keyword (second e))])}
            (clojure.string/replace (second e) #"-" " ")])
         allowed-keys)))

(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])] 
    [:div
     [:h1 @name]
     (vec (cons :div.schaltflaechen
                (schaltflaechen)))
     [status]
     [spielstand]]))
