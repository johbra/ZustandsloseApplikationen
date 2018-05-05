(ns nonopolyful.handler
  (:require [nonopolyful.core :refer :all]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.json :as ring-json]
            [ring.util.response :as rr]))


(defroutes app-routes
  (GET "/" [] "NoNopoly")
  (GET "/nonopoly" []
       (let [spiel (-> nonopoly (initialisiere) (verteile-startguthaben))]
         (rr/response
          {:status (str (if (spiel-beendet? spiel) "Spiel beendet" "Spiel läuft")) 
           :spielstand (render spiel)})))
  (GET "/nonopoly-spielen" []
       (let [spiel (-> nonopoly (initialisiere) (verteile-startguthaben))
             spiel (spielen spiel)]
         (rr/response
          {:status (str (if (spiel-beendet? spiel) "Spiel beendet" "Spiel läuft")) 
           :spielstand (render spiel)})))  
  (route/not-found "Not Found"))

(def app
  (-> app-routes
      (ring-json/wrap-json-response)
      (wrap-defaults site-defaults)))  
