(ns nonopolyref.db
  [:require [nonopolyfulc.core :refer [NONOPOLY initialisiere verteile-startguthaben]]])

(def default-db
  (-> NONOPOLY (initialisiere) (verteile-startguthaben)))
