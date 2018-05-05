(ns nonopolyful.cores
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.browser.repl :as repl]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [enfocus.core :as ef]
            [enfocus.events :as ev]))

(defn spielen [] 
  (go
    (let [response (<! (http/get "/nonopoly-spielen"))
          body (:body response)]
      (ef/at "#status" (ef/do->
                        (ef/content (:status body))
                        (ef/set-style :font-weight "bold")))
      (ef/at "#spielstand" (ef/content (:spielstand body))))))

(defn ^:export init []
  (repl/connect "http://localhost:9000/repl")
  (go
    (let [response (<! (http/get "/nonopoly"))
          body (:body response)]
      (ef/at "#status" (ef/do->
                        (ef/content (:status body))
                        (ef/set-style :font-weight "bold")))
      (ef/at "#spielstand" (ef/content (:spielstand body)))
      (ef/at "#start" (ev/listen
                       :click
                       spielen)))))


;; (defn ^:export init []
;;   (repl/connect "http://localhost:9000/repl"))
