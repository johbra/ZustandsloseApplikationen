(ns nonopoly.nonopoly
  (:require [nonopolyful.core :as nop]
            [nonopoly.welten :as wrld]
            ))

;; WorldState -> WorldState
(defn main
  "launches the program from some initial state "
  [ws]
  (wrld/big-bang ws nop/ACTIONS))

;; Programmstart via clj:
(defn -main [] (main (-> nop/nonopoly
                         (nop/initialisiere)
                         (nop/verteile-startguthaben))))
