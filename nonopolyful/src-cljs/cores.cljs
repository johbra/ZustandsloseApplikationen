(ns nonopolyful.cores
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.browser.repl :as repl]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [enfocus.core :as ef]))

(defn ^:export init []
  (repl/connect "http://localhost:9000/repl")
  (go
    (let [response (<! (http/get "/nonopoly"))
          body (:body response)]
      (ef/at "#status" (ef/content (:status body)))
      (ef/at "#spielstand" (ef/content (:spielstand body))))))

;; (defn ^:export init []
;;   (repl/connect "http://localhost:9000/repl"))
