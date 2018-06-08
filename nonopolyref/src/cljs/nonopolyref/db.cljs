(ns nonopolyref.db
  [:require [nonopolyful.core :refer [nonopoly initialisiere verteile-startguthaben]]])

(def default-db
  (-> nonopoly (initialisiere) (verteile-startguthaben)))
