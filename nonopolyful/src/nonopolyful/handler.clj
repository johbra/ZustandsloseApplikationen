(ns nonopolyful.handler
  (:require [nonopolyful.core :refer :all]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.json :as ring-json]
            [ring.util.response :as rr]
            [ring.util.request :as rq]
            [clojure.edn :as edn]))

(def button->action
  (zipmap (map (fn [k] (str "/nonopoly-" k)) (keys actions))
          (vals actions)))

(defn handler [req]
  (let [world ((button->action (second (:compojure/route req))) (edn/read-string (rq/body-string req)))]
    (rr/response                                                                                              {:status (str (if (spiel-beendet? world) "Spiel beendet" "Spiel läuft"))                                  :spielstand (render world)                                                                               :world (prn-str world)})))

(def app-routes
  (routes 
   (GET "/" [] "NoNopoly")
   (GET "/nonopoly" req []
        (let [world (-> nonopoly (initialisiere) (verteile-startguthaben))
              actions (prn-str (keys actions))] 
          (rr/response
           {:status (str (if (spiel-beendet? world) "Spiel beendet" "Spiel läuft")) 
            :spielstand (render world)
            :world (prn-str world)
            :actions actions})))
   (POST (str "/nonopoly-" "Spiel-fortsetzen") req (handler req))
   (apply routes
          (map (fn [route] (make-route :post route handler)) (keys button->action)))
   (route/not-found "Not Found")))

(def app
  (-> app-routes
      (ring-json/wrap-json-body {:keywords? true})
      (ring-json/wrap-json-response)
      (wrap-defaults (assoc-in site-defaults [:security :anti-forgery] false))))  

