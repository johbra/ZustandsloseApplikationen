(ns nonopolyful.welten
  (:require [clojure.string]
            ;; [planck.core :as pio]
            ))

(defn show-prompt [allowed-keys]
  (println (apply str (interpose ", "
                                 (map (fn [[key value]]
                                        (str (clojure.string/replace value "-" " ")
                                             ": " key))
                                      allowed-keys)))))

(defn key-pressed [allowed-keys]
  (show-prompt allowed-keys)  
  ;; (loop
  ;;     [i (pio/read-line)]
  ;;   (if (contains? allowed-keys i)
  ;;     i
  ;;     (do (show-prompt allowed-keys)
  ;;         (recur (pio/read-line)))))
  )

(defn big-bang [ws actions]
  (println "Anfang der Welt")
  (println ((:to-draw actions) ws))
  (loop [w ws]
    (if (not ((:stop-when actions) w))
      (let [nw ((:on-key actions) w
                (key-pressed (:allowed-keys actions)))]
        (do (println ((:to-draw actions) nw))
            (recur nw)))
      (println "Ende der Welt"))))

