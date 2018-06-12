(ns nonopoly.handler
  (:require [nonopolyful.core :refer [ACTIONS spiel-beendet? NONOPOLY
                                      verteile-startguthaben initialisiere]]
            [compojure.core  :refer [GET routes make-route]]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.json :as ring-json]
            [ring.util.response :as rr]
            [ring.util.request :as rq]
            [clojure.edn :as edn]))

(def allowed-keys (ACTIONS :allowed-keys))
(def action-urls (map (fn [k] (str "/nonopoly-" k)) (vals allowed-keys)))

(defn handler [req]
  (let [key ((clojure.set/map-invert allowed-keys)
             (clojure.string/replace (second (:compojure/route req)) "/nonopoly-" ""))
        world ((ACTIONS :on-key) (edn/read-string (rq/body-string req))
               key)]
    (rr/response
     {:status (str (if (spiel-beendet? world) "Spiel beendet" "Spiel läuft"))
      :spielstand ((ACTIONS :to-draw) world)
      :world (prn-str world)})))

(def app-routes
  (routes 
   (GET "/" []
        "<h2><a href=http://localhost:3000/nonopoly.html>NoNopoly starten</a></h2>")
   (GET "/nonopoly" req []
        (let [world (-> NONOPOLY (initialisiere) (verteile-startguthaben))
              button-ids (prn-str (vals allowed-keys))] 
          (rr/response
           {:status (str (if (spiel-beendet? world) "Spiel beendet" "Spiel läuft")) 
            :spielstand ((ACTIONS :to-draw) world)
            :world (prn-str world)
            :button-ids button-ids})))
   (apply routes
          (map (fn [route] (make-route :post route handler)) action-urls))
   (route/not-found "Not Found")))

(def app
  (-> app-routes
      (ring-json/wrap-json-body {:keywords? true})
      (ring-json/wrap-json-response)
      (wrap-defaults (assoc-in site-defaults [:security :anti-forgery] false))))  

