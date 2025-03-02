(ns yardwerkz.app.db
  (:require
   [clojure.string :as str]
   [yardwerkz.app.config :as config]
   [datascript.core :as d]
   ["react" :as react]))

(defonce schema {:menu/id {:db/unique :db.unique/identity}
                 :dish/id {:db/unique :db.unique/identity}})
(defonce db-initialized? (atom false))
(def conn (d/create-conn schema))

(defn use-database [cb]
  (let [k (gensym "db")
        subscribe (fn [cb]
                    (d/listen! conn k cb)
                    (fn []
                      (d/unlisten! conn k)))
        get-snapshot (fn []
                       (d/db conn))]
    (react/useSyncExternalStore subscribe get-snapshot)))

(defn use-database-query [cb query-fn]
  (let [db (use-database cb)]
    (query-fn db)))

(def menu-id (random-uuid))

(defn init-db []
  (println "Initializing database...")
  (d/transact! conn
               [{:db/id -1
                 :menu/start-date "2025-01-13"
                 :menu/end-date "2025-01-17"
                 :menu/end-time "15:00"
                 :menu/delivery-method "drop-off"
                 :menu/cuisines "Italian, Mexican"
                 :menu/dietary-restrictions ""}
                {:db/id -2
                 :dish/menu 1
                 :dish/name "Lasagna"
                 :dish/description "A classic Italian dish made with layers of pasta, meat, and cheese."
                 :dish/servings 8
                 :dish/price 12.99}
                {:db/id -3
                 :dish/menu 1
                 :dish/name "Chicken Alfredo"
                 :dish/description "A creamy pasta dish made with chicken, cheese, and Alfredo sauce."
                 :dish/servings 6
                 :dish/price 10.99}
                {:db/id -4
                 :dish/menu 1
                 :dish/name "Tacos"
                 :dish/description "A Mexican dish made with tortillas, meat, and toppings."
                 :dish/servings 10
                 :dish/price 8.99}]))
