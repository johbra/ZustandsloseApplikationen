(ns nonopolyful.cores
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.browser.repl :as repl]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [enfocus.core :as ef]
            [enfocus.events :as ev] 
            [cljs.reader :as edn]
            ))

;; der Weltzustand
(def app-state (atom nil))

;; die Schaltflächen
(def button-ids (atom nil))

(defn request [event]
  (let [url (-> event (.-currentTarget) (.-id))]
    (go
      (let [response  (<! (http/post (str "/nonopoly-" url) {:edn-params @app-state}))
            body (:body response)
            world (:world body)
            status (:status body)
            spielstand (:spielstand body)] 
        (reset! app-state (edn/read-string world))
        (ef/at "#status" (ef/do->
                          (ef/content status)
                          (ef/set-style :font-weight "bold")))
        (ef/at "#spielstand" (ef/content spielstand))))))

(defn ^:export init []
  (repl/connect "http://localhost:9000/repl")                
  (go
    (let [response (<! (http/get "/nonopoly"))
          body (:body response)
          world (:world body)
          b-ids (:button-ids body)         ]
      (reset! app-state (edn/read-string world))
      (reset! button-ids (edn/read-string b-ids))
      (ef/at "#status" (ef/do->
                        (ef/content (:status body))
                        (ef/set-style :font-weight "bold")))
      (ef/at "#spielstand" (ef/content (:spielstand body)))
      ;; Event-Listener für die Aktionen/schaltflächen definieren:
      (doseq  [a @button-ids]
        (ef/at (str "#" a) (ev/listen :click (fn [ev] (request ev)))))
      )))





