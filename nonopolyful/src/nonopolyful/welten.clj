(ns nonopolyful.welten)

(defn welten-lauf [welt ereignisse]
  (loop [w welt]
    (if ((ereignisse :stopp-wenn) w)
      (do (println "Ende der Welt") w)
      (recur ((ereignisse :naechste-welt) w)))))


(defn neue-welt [welt ereignisse]
  (welten-lauf welt ereignisse))

