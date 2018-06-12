(ns nonopoly.nonopolytaler
  (:require [dosl2clj.core :refer :all] 
            [serializable.fn :as sf]))

;; NoNopolytaler
((obj {:wert 0} {:to-string (fn [] (str (self :wert) " Nt"))
                 :add (fn [ant] (nt (+ (self :wert) (ant :wert))))
                 :sub (fn [ant] (nt (- (self :wert) (ant :wert))))
                 :mul (fn [i] (nt (* (self :wert) i)))}) :kappa 'NoNopolytaler)

(defn nt [wert] ((NoNopolytaler :new) :wert wert) )


