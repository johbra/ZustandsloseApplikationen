(ns nonopolyful.welten)

(defn show-prompt [allowed-keys]
  (println (apply str (interpose ", "
                                 (map (fn [[key value]] (str value " " key))
                                      allowed-keys)))))

(defn key-pressed [allowed-keys]
  (show-prompt allowed-keys) 
  (loop
      [i (read-line)]
    (if (contains? allowed-keys i)
      i
      (do (show-prompt allowed-keys)
          (recur (read-line))))))

(defn big-bang [ws aktions]
  (println "Anfang der Welt")
  (println ((:to-draw aktions) ws))
  (loop [w ws]
    (if (not ((:stop-when aktions) w))
      (let [nw ((:on-key aktions) w
                (key-pressed (:allowed-keys aktions)))]
        (do (println ((:to-draw aktions) nw))
            (recur nw)))
      (println "Ende der Welt"))))

