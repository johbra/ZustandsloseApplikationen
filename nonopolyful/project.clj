(defproject nonopolyful "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [compojure "1.5.1"]
                 [ring/ring-defaults "0.2.1"]
                 [ring/ring-json "0.3.1"]
                 [org.clojure/clojurescript "1.10.238"]
                 [cljs-http "0.1.45"]
                 [org.clojure/core.async "0.4.474"]
                 [enfocus "2.1.1"]]
  :plugins [[lein-ring "0.9.7"]
            [lein-cljsbuild "1.1.1"]]
  :ring {:handler nonopolyful.handler/app}
  :main ^:skip-aot nonopolyful.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}
             :dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                                  [ring/ring-mock "0.3.0"]]}}
  :cljsbuild {
              :builds [{
                        :source-paths ["src-cljs"]
                        :compiler {
                                   :output-to "resources/public/main.js"
                                   :optimizations :whitespace
                                   :pretty-print true}}]})

