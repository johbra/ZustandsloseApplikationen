(ns nonopolyful.cores
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.browser.repl :as repl]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [enfocus.core :as ef]
            [enfocus.events :as ev] 
            [cljs.reader :as edn]))

(def app-state (atom nil))

(defn spielen []
  (go
    (let [response (<! (http/post "/nonopoly-Spiel-fortsetzen"{:edn-params @app-state}))
          body (:body response)
          world (:world body)
          status (:status body)
          spielstand (:spielstand body)] 
      ;;      (js/alert (.toString world))
      (reset! app-state (edn/read-string world))
      (ef/at "#status" (ef/do->
                        (ef/content status)
                        (ef/set-style :font-weight "bold")))
      (ef/at "#spielstand" (ef/content spielstand))
      ;;      (js/alert spielstand)
      ;; (ef/at "#actions" (ef/content (prn-str world)))
      )))

(defn lass-spieler-an-der-reihe-ziehen []
  (go
    (let [response  (<! (http/post "/nonopoly-1-zug" {:edn-params @app-state}))
          body (:body response)
          world (:world body)
          status (:status body)
          spielstand (:spielstand body)] 
      ;;      (js/alert (.toString world))
      (reset! app-state (edn/read-string world))
      (ef/at "#status" (ef/do->
                        (ef/content status)
                        (ef/set-style :font-weight "bold")))
      (ef/at "#spielstand" (ef/content spielstand))
      ;;      (js/alert spielstand)
      ;; (ef/at "#actions" (ef/content (prn-str world)))
      )))

(defn lass-spieler-an-der-reihe-ziehen []
  (go
    (let [response  (<! (http/post "/nonopoly-1-zug" {:edn-params @app-state}))
          body (:body response)
          world (:world body)
          status (:status body)
          spielstand (:spielstand body)] 
      ;;      (js/alert (.toString world))
      (reset! app-state (edn/read-string world))
      (ef/at "#status" (ef/do->
                        (ef/content status)
                        (ef/set-style :font-weight "bold")))
      (ef/at "#spielstand" (ef/content spielstand))
      ;;      (js/alert spielstand)
      ;; (ef/at "#actions" (ef/content (prn-str world)))
      )))

(defn eine-runde []
  (go
    (let [response  (<! (http/post "/nonopoly-Runde-beenden" {:edn-params @app-state}))
          body (:body response)
          world (:world body)
          status (:status body)
          spielstand (:spielstand body)] 
      ;;      (js/alert (.toString world))
      (reset! app-state (edn/read-string world))
      (ef/at "#status" (ef/do->
                        (ef/content status)
                        (ef/set-style :font-weight "bold")))
      (ef/at "#spielstand" (ef/content spielstand))
      ;;      (js/alert spielstand)
      ;; (ef/at "#actions" (ef/content (prn-str world)))
      )))

(defn abbruch []
  (go
    (let [response  (<! (http/post "/nonopoly-Spiel-abbrechen" {:edn-params @app-state}))
          body (:body response)
          world (:world body)
          status (:status body)
          spielstand (:spielstand body)] 
      ;;      (js/alert (.toString world))
      (reset! app-state (edn/read-string world))
      (ef/at "#status" (ef/do->
                        (ef/content status)
                        (ef/set-style :font-weight "bold")))
      (ef/at "#spielstand" (ef/content spielstand))
      ;;      (js/alert spielstand)
      ;; (ef/at "#actions" (ef/content (prn-str world)))
      )))

(defn ^:export init []
  (repl/connect "http://localhost:9000/repl")                
  (go
    (let [response (<! (http/get "/nonopoly"))
          body (:body response)
          world (:world body)]
      ;;      (js/alert (.toString (:spielstand body)))
      (reset! app-state (edn/read-string world))
      (ef/at "#status" (ef/do->
                        (ef/content (:status body))
                        (ef/set-style :font-weight "bold")))
      (ef/at "#spielstand" (ef/content (:spielstand body)))
      (ef/at "#Spiel-fortsetzen" (ev/listen
                                  :click
                                  spielen)) 
      (ef/at "#1-zug" (ev/listen
                       :click
                       lass-spieler-an-der-reihe-ziehen))
      (ef/at "#Runde-beenden" (ev/listen
                               :click
                               eine-runde))
      (ef/at "#Spiel-abbrechen" (ev/listen
                                 :click
                                 abbruch))
      ;; (ef/at "#actions" (ef/content (.toString world)))
      )))






