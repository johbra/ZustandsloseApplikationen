(ns nonopolyful.cores
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.browser.repl :as repl]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [enfocus.core :as ef]
            [enfocus.events :as ev] 
            [cljs.reader :as edn]
            ))

(def app-state (atom nil))

(def button-ids
  [ "1-Zug"
   "Runde-beenden"
   "Spiel-fortsetzen"
   "Spiel-abbrechen"])

(defn request [event]
  (let [url (-> event (.-currentTarget) (.-id))]
    (go
      (let [response  (<! (http/post (str "/nonopoly-" url) {:edn-params @app-state}))
            body (:body response)
            world (:world body)
            status (:status body)
            spielstand (:spielstand body)] 
        ;;      (js/alert (.toString world))
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
          actions (edn/read-string (:actions body))]
      ;;      (js/alert (.toString (:spielstand body)))
      (reset! app-state (edn/read-string world))
      (ef/at "#status" (ef/do->
                        (ef/content (:status body))
                        (ef/set-style :font-weight "bold")))
      (ef/at "#spielstand" (ef/content (:spielstand body)))
      ;; Event-Listener für die Aktionen definieren:
      (doseq  [a button-ids]
        (ef/at (str "#" a) (ev/listen :click (fn [ev] (request ev)))))
      )))





