(ns dosl2clj.grokking
  (:require [dosl2clj.core :refer :all]))

;; Switches
(def On (obj {:switch "on"} {:toggle (fn [] Off)
                             :either (fn [sw] On)
                             :all (fn [sw] sw)}))
(def Off (obj {:switch "off"} {:toggle (fn [] On)
                               :either (fn [sw] sw)
                               :all (fn [sw] Off)}))
(((On :toggle) :toggle) :switch) ;; => "on"
((On :either Off) :switch)  ;; => "on"
((Off :either Off) :switch) ;; => "off"
((Off :either On) :switch)  ;; => "on"
((On :all Off) :switch)     ;; => "off"
((Off :all On) :switch)     ;; => "off"
((On :all On) :switch)      ;; => "on"

;;; Erweiterung um undef. Zustand ???
(def ??? (obj {:switch "???"} {:toggle (fn [] ???)
                               :either (fn [sw] ???)
                               :all (fn [sw] ???)}))
((??? :toggle) :switch)      ;; => "???"
((??? :either On) :switch)   ;; => "???"
((??? :all On) :switch)      ;; => "???"
((Off :either ???) :switch)  ;; => "???"
((On :either ???) :switch)   ;; => "on"  abweichend von Aslam Kan
((Off :all ???) :switch)     ;; => "off"     "            "
((On :all ???) :switch)      ;; => "???"
