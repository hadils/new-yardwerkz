(ns hotplates.app.page.menu
  (:require
   [clojure.string :as str]
   [uix.core :as uix :refer [defui $]]
   [uix.dom :as dom]
   [hotplates.app.config :as config]
   [hotplates.app.db :as db]
   [reitit.frontend.easy :as rfe]
   [hotplates.app.event-bus :as eb]
   ["react" :as react]
   ["@js-joda/core" :refer [LocalDate LocalTime ChronoUnit ZonedDateTime ZoneId]]
   ["@js-joda/timezone"]
   ["@tanstack/react-query" :refer [useQuery useQueryClient useMutation]]
   [hotplates.app.util :refer [pathom-op to-js from-js]]
   [malli.core :as m]
   [malli.error :as me]))

(def menu-id #uuid "e68d348f-12bd-4589-930e-7d5e6af7873f")

(def dish-schema
  [:map
   [:dish/name [:string {:min 1 :error/message "Enter a name for the dish"}]]
   [:dish/description :string]
   [:dish/servings [:int {:min 1 :error/message "Enter a number of servings"}]]
   [:dish/price [:float {:min 0.01 :error/message "Enter a price"}]]])

(def menu-schema
  [:map
   [:menu/end-date [:string {:min 1 :error/message "Select an end date"}]]
   [:menu/end-time [:string {:min 1 :error/message "Select an end time"}]]
   [:menu/delivery-method [:string {:min 1 :error/message "Select either pick-up or drop-off"}]]
   [:menu/cuisines [:string {:min 1 :error/message "Enter at least one cuisine"}]]
   [:menu/dietary-restrictions :string]
   [:menu/dishes [:vector {:min 1 :error/message "Add at least one dish"}
                  dish-schema]]])

(defn dish-init [default-values event callback]
  (eb/subscribe event callback)
  {:event event
   :data default-values})

(defn get-dish [ctx key]
  (get-in ctx [:data key]))

(defn update-dish [ctx key value]
  (let [result (assoc-in ctx [:data key] value)]
    (eb/publish (:event ctx) result)
    result))

(defn validate-dish
  "Calls malli to validate the dish stored in ctx against schema"
  [ctx schema]
  (let [result (assoc ctx :errors
                      (-> schema
                          (m/explain (:data ctx))
                          (me/humanize {:error/message me/default-errors})))]
    (eb/publish (:event ctx) result)
    result))

(defn get-dish-error [ctx key]
  (get-in ctx [:errors key]))

(defn menu-init [default-values event callback]
  (eb/subscribe event callback)
  {:event event
   :data default-values})

(defn get-menu [ctx key]
  (get-in ctx [:data key]))

(defn get-dish-from-menu [ctx idx key]
  (get-in ctx [:data :menu/dishes idx key]))

(defn update-menu [ctx key value]
  (let [result (assoc-in ctx [:data key] value)]
    (eb/publish (:event ctx) result)
    result))

(defn update-dish-in-menu [ctx idx key value]
  (let [result (assoc-in ctx [:data :menu/dishes idx key] value)]
    (eb/publish (:event ctx) result)
    result))

(defn add-dish-to-menu
  "Add a dish created by dish-init and manipulated with get-dish and update-dish to menu specified by ctx"
  [ctx dish]
  (let [result (update-in ctx [:data :menu/dishes] conj (:data dish))]
    (eb/publish (:event ctx) result)
    result))

(defn validate-menu
  "Calls malli to validate the menu stored in ctx against schema"
  [ctx schema]
  (let [result (assoc ctx :errors
                      (-> schema
                          (m/explain (:data ctx))
                          (me/humanize {:errors me/default-errors})))]
    (eb/publish (:event ctx) result)
    result))

(defn string-to-set
  [string]
  (->> (str/split string #",")
       (map str/trim)
       (map str/lower-case)
       (remove empty?)
       set))

(defn use-menu-mutation
  "Wraps Tanstack Query to mutate a menu. Must be validated first."
  [ctx]
  (let [data (-> (:data ctx)
                 (dissoc :menu/end-date :menu/end-time)
                 (assoc :menu/ended-at (ZonedDateTime.of
                                        (LocalDate.parse (:menu/end-date data))
                                        (LocalTime.parse (:menu/end-time data))
                                        (ZoneId.of "SYSTEM"))
                        (update :menu/cuisines string-to-set))
                 (update :menu/dietary-restrictions string-to-set))]
    (useMutation
     (to-js {:mutation-fn
             (fn []
               (pathom-op
                {}
                [('menu/create data)]))}))))

(comment
  (-> menu-schema
      (m/explain {:menu/end-date ""
                  :menu/end-time ""
                  :menu/delivery-method ""
                  :menu/cuisines ""
                  :menu/dietary-restrictions ""
                  :menu/dishes [#_{:dish/name ""
                                   :dish/description ""
                                   :dish/servings 0
                                   :dish/price 0}]})
      (me/humanize {:errors me/default-errors}))

  (ZonedDateTime.of (LocalDate.parse "2025-03-01") (LocalTime.parse "18:00:00") (ZoneId.of "SYSTEM")))

(defn today []
  (.. LocalDate now toString))

(defn now []
  (let [now (.now LocalTime)]
    (-> (.truncatedTo now ChronoUnit.MINUTES)
        .toString)))

(defui left-side []
  ($ :form
     ($ :.div.space-y-4
        ($ :div
           ($ :label.block.text-sm.font-medium.text-gray-700 {:for "end_date"} "Date")
           ($ :input.mt-1.block.w-full.rounded-md.border-gray-300.shadow-sm.focus:border-blue-500.focus:ring-blue-500
              {:id "end_date"
               :name "end_date"
               :type "date"
               :required true
               :on-change #(set-menu! (assoc menu :end-date (.. % -target -value)))
               :value (:end-date menu)}))
        ($ :div
           ($ :label.block.text-sm.font-medium.text-gray-700 {:for "end_time"} "Time")
           ($ :input.mt-1.block.w-full.rounded-md.border-gray-300.shdow-sm.focus:border-blue-500.focus:ring-blue-500
              {:id "end_time"
               :name "end_time"
               :type "time"
               :required true
               :on-change #(set-menu! (assoc menu :end-time (.. % -target -value)))
               :value (:end-time menu)}))
        ($ :div
           ($ :label.block.text-sm.font-medium.text-gray-700  {:for "delivery_method"} "Delivery Method")
           ($ :select {:id "delivery_method"
                       :required true
                       :name "delivery_method"
                       :class "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" :multiple false :size "lg"
                       :value (:delivery-method menu)
                       :on-change #(set-menu! (assoc menu :delivery-method (.. % -target -value)))}
              ($ :option {:value ""} "-- Select --")
              ($ :option {:value "pick-up"} "Pick up")
              ($ :option {:value "drop-off"} "Drop off"))))))

(defui right-side []
  ($ :form
     ($ :.div.space-y-4
        ($ :div
           ($ :label.block.text-sm.font-medium.text-gray-700  {:for "cuisines"} "Cuisines")
           ($ :input.mt-1.block.w-full.rounded-md.border-gray-300.shadow-sm.focus:border-blue-500.focus:ring-blue-500
              {:id "cuisines"
               :type "text" :placeholder "Italian, Mexican, etc."
               :value (:cuisines menu)
               :required true
               :on-change #(set-menu! (assoc menu :cuisines (.. % -target -value)))}))
        ($ :div
           ($ :label.block.text-sm.font-medium.text-gray-700 {:for "dietary_restrictions"} "Dietary Restrictions")
           ($ :textarea.mt-1.block.w-full.rounded-md.border-gray-300.shadow-sm.focus:border-blue-500.focus:ring-blue-500
              {:id "dietary_restrictions"
               :rows 2 :placeholder "Vegan, Gluten-free, etc."
               :value (:dietary-restrictions menu)
               :on-change #(set-menu! (assoc menu :dietary-restrictions (.. % -target -value)))})))))

(defui menu-item [{:keys [dish update-dish add-dish]}]
  (println "menu-item" dish)
  ($ :div.grid.grid-cols-1.md:grid-cols-5.gap-4.mb-4
     ($ :input.inpud
        {:id "dish"
         :type "text"
         :value (:dish/name dish)
         :on-change #(update-dish :dish/name (.. % -target -value))})
     ($ :input.input
        {:id "description"
         :type "text"
         :value (:dish/description dish)
         :on-change #(update-dish :dish/description (.. % -target -value))})
     ($ :input.input
        {:id "servings"
         :type "number" :min 1 :max 100
         :value (:dish/servings dish)
         :on-change #(update-dish :dish/servings (.. % -target -value))})
     ($ :input.input
        {:id "price"
         :type "number" :min 0 :max 100
         :value (:dish/price dish)
         :on-change #(update-dish :dish/price (.. % -target -value))})
     (if add-dish
       ($ :button.btn "Add")
       ($ :div))))

(defui dishes []
  (let [new-dish {:dish/name ""
                  :dish/description ""
                  :dish/servings 1
                  :dish/price 0}
        [dish set-dish!] (uix/use-state new-dish)
        add-dish! (uix/use-callback (fn [e]
                                      (.preventDefault e)
                                      (set-menu! (update menu :dishes conj dish))
                                      (set-dish! new-dish))
                                    [dish menu set-menu! new-dish])
        update-dish! (uix/use-callback (fn [index key value]
                                         (set-menu! (update-in menu [:dishes index] assoc key value)))
                                       [menu set-menu!])]
    ($ :div.p-4.border-rounded-md.bg-gray-50
       ($ :form
          ($ :div.grid.grid-cols-1.md:grid-cols-5.gap-4.mb-4
             ($ :label.block.text-sm.font-medium.text-gray-700 {:for "dish"}  "Dish")
             ($ :label.block.text-sm.font-medium.text-gray-700 {:for "description"} "Description")
             ($ :label.block.text-sm.font-medium.text-gray-700 {:for "servings"} "Servings")
             ($ :label.block.text-sm.font-medium.text-gray-700 {:for "price"} "Price")
             ($ :div))

          ($ menu-item {:dish dish
                        :update-dish #(set-dish! (assoc dish %1 %2))
                        :add-dish add-dish!}))
       (for [index (range (count (:dishes menu)))
             dish (:dishes menu)]
         (do
           (println dish)
           ($ :div {:key index}
              ($ menu-item {:dish dish
                            :update-dish (partial update-dish! index)})))))))

(defui menu-page
  "Create a menu. Called with the chef-id as a path parameter."
  [{:keys [match history]}]
  (let [{:keys [parameters]} match
        {:keys [path]} parameters
        {:keys [chef-id]} path
        new-menu {:menu/chef-id chef-id
                  :menu/end-date (today)
                  :menu/end-time (now)
                  :menu/delivery-method ""
                  :menu/cuisines ""
                  :menu/dietary-restrictions ""
                  :menu/dishes []}
        [_ forceupdate] (uix/u)
        save-menu (fn []
                    (println "menu"))]
    ($ :div.max-w-4xl.mx-auto.p-6.bg-white.rounded-lg.shadow-lg
       ($ :h2.text-2xl.font-bold.mb-6.text-gray-800 "Menu Planner")
       ($ :div.grid.grid.grid-cols-1.md:grid-cols-2.gap-6
          ($ left-side)
          ($ right-side))
       ($ dishes)
       ($ :button.btn {:on-click save-menu} "Save Menu"))))
