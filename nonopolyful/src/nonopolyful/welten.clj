(ns nonopolyful.welten)

(defn interaktion []
  (println "1 Zug: z, bis zum Ende: e")
  (loop
      [i (read-line)]
    (cond (= i "z") :ein-zug
          (= i "e") :spiel-ablauf
          :else (do (println "1 Zug: z, bis zum Ende: e") (recur (read-line))))))


(defn welten-lauf [welt ereignisse render-welt]
  (loop [w welt]
    (cond ((ereignisse :stopp-wenn) w)
          (do (println "Ende der Welt") (render-welt w))

          :else 
          (recur ((ereignisse :naechste-welt) w)))))

(defn welten-lauf-interaktiv [welt ereignisse render-welt]
  (loop [w welt]
    (cond ((ereignisse :stopp-wenn) w)
          (do (println "Ende der Welt") (render-welt w))

          :else (let [wlt ((ereignisse :naechste-welt) w)]
                  (do (println (render-welt wlt))
                      (let [i (interaktion)]
                        (cond
                          (= i :ein-zug) (recur wlt)
                          (= i :spiel-ablauf)
                          (welten-lauf wlt ereignisse render-welt))))))))

(defn neue-welt [welt ereignisse render]
  (println "Anfang der Welt")
  (println (render welt)) 
  (let [i (interaktion)]
    (cond
      (= i :ein-zug) (welten-lauf-interaktiv welt ereignisse render)
      (= i :spiel-ablauf) (welten-lauf welt ereignisse render))))

