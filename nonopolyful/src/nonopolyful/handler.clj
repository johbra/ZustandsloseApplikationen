(ns nonopolyful.handler
  (:require [nonopolyful.core :refer :all]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.json :as ring-json]
            [ring.util.response :as rr]
            [ring.util.request :as rq]
            [clojure.edn :as edn]))

(defroutes app-routes
  (GET "/" [] "NoNopoly")
  (GET "/nonopoly" req []
       (let [world (-> nonopoly (initialisiere) (verteile-startguthaben))] 
         (rr/response
          {:status (str (if (spiel-beendet? world) "Spiel beendet" "Spiel läuft")) 
           :spielstand (render world)
           :world (prn-str world)})))
  
  ;; (GET "/nonopoly-spielen" []
  ;;      (let [world (-> nonopoly (initialisiere) (verteile-startguthaben))
  ;;            world (spielen world)]
  ;;        (rr/response
  ;;         {:status (str (if (spiel-beendet? world) "Spiel beendet" "Spiel läuft"))
  ;;          :spielstand (render world)})))

  (POST "/nonopoly-Spiel-fortsetzen" req 
        (let [world (spielen (edn/read-string (rq/body-string req)))]
          (rr/response                                                                                              {:status (str (if (spiel-beendet? world) "Spiel beendet" "Spiel läuft"))                                  :spielstand (render world)                                                                               :world (prn-str world)})))

  (POST "/nonopoly-1-zug" req 
        (let [world (lass-spieler-an-der-reihe-ziehen (edn/read-string (rq/body-string req)))]
          (rr/response                                                                                              {:status (str (if (spiel-beendet? world) "Spiel beendet" "Spiel läuft"))                                  :spielstand (render world)                                                                               :world (prn-str world)})))

  (POST "/nonopoly-Runde-beenden" req 
        (let [world (eine-runde (edn/read-string (rq/body-string req)))]
          (rr/response                                                                                              {:status (str (if (spiel-beendet? world) "Spiel beendet" "Spiel läuft"))                                  :spielstand (render world)                                                                               :world (prn-str world)})))

  (POST "/nonopoly-Spiel-abbrechen" req 
        (let [world (abbruch (edn/read-string (rq/body-string req)))]
          (rr/response                                                                                              {:status (str (if (spiel-beendet? world) "Spiel beendet" "Spiel läuft"))                                  :spielstand (render world)                                                                               :world (prn-str world)})))

  (route/not-found "Not Found"))

(def app
  (-> app-routes
      (ring-json/wrap-json-body {:keywords? true})
      (ring-json/wrap-json-response)
      (wrap-defaults (assoc-in site-defaults [:security :anti-forgery] false))))  

