(ns yardwerkz.app.core
  (:require
   [uix.core :as uix :refer [defui $]]
   [uix.dom :as dom]
   [yardwerkz.app.config :as config]
   [yardwerkz.app.db :as db]
   [yardwerkz.app.page.menu :refer [menu-page]]
   [yardwerkz.app.page.profile :refer [profile-page]]
   [reitit.coercion.malli]
   [reitit.coercion :as coercion]
   [reitit.frontend :as rf]
   [reitit.frontend.easy :as rfe]
   ["react" :as react]
   ["@tanstack/react-query" :refer [QueryClient QueryClientProvider]]
   ["@tanstack/react-query-devtools" :refer [ReactQueryDevtools]]))

(def query-client (QueryClient.))

(def routes
  [["/profile"
    {:name :profile
     :view profile-page}]
   ["/menu/:chef-id"
    {:name :menu
     :view menu-page
     :coercion reitit.coercion.malli/coercion
     :parameters {:path [:map [:chef-id :uuid]]}}]])

(defui root []
  (let [[nav set-nav!] (uix/use-state nil)]
    (uix/use-effect
     (fn [] (rfe/start!
             (rf/router routes {:compile coercion/compile-request-coercers})
             (fn [match history]
               (set-nav! {:match match :history history}))
             {:use-fragment true})) [])
    (when nav
      (let [page (-> nav :match :data :view)]
        ($ QueryClientProvider {:client query-client}
           ($ page nav)
           ($ ReactQueryDevtools {:initial-is-open false}))))))

(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defonce root-el (atom nil))

(defn ^:dev/after-load mount-root []
  (println "Mounting app...")
  (when (nil? @root-el)
    (reset! root-el (dom/create-root (.getElementById js/document "app"))))
  (dom/render-root ($ root) @root-el))

(defn init []
  (println "Initializing app..." @db/db-initialized?)
  (when (compare-and-set! db/db-initialized? false true)
    (db/init-db))
  (mount-root))
