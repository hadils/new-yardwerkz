(ns hotplates.app.page.profile
  (:require
   [uix.core :as uix :refer [defui $]]
   [uix.dom :as dom]
   [reitit.frontend.easy :as rfe]
   ["@tanstack/react-query" :refer [useQuery useQueryClient]]
   [hotplates.app.util :refer [pathom-op to-js from-js]]))


(def chef-id  #uuid "7a241bf8-0b79-418e-8ea4-d1714a8e6c4a")

(defui carousel [{:keys [images]}]
  (let [[current-index set-current-index!] (uix/use-state 0)
        n (count images)
        next-slide (fn [] (set-current-index! (mod (inc current-index) n)))
        prev-slide (fn [] (set-current-index! (mod (+ (dec current-index) n) n)))]
    ($ :div.relative.w-full.max-w-3xl.mx-auto.mt-4
       ($ :div {:class "overflow-hidden relative h-64"}
          (map-indexed
           (fn [index item]
             (let [item (js->clj item :keywordize-keys true)
                   translate (if (= index current-index) "translate-x-0" "translate-x-full")]
               ($ :div {:class (str "absolute inset-0 transition-transform transform " translate)
                        :key (str index)}
                  ($ :img {:class "w-full h-full px-1 object-cover rounded"
                           :src (:src item)})))) images))
       ($ :button {:class "absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
                   :on-click prev-slide}
          "Prev")
       ($ :button {:class "absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
                   :on-click next-slide}
          "Next"))))

(defui profile-page [{:keys [match history]}]
  (let [query-client (useQueryClient)
        query (useQuery (to-js
                         {:query-key [:chef/id chef-id]
                          :query-fn (fn [params]
                                      (let [[k id] (from-js ^js (.-queryKey params))]
                                        (pathom-op {:chef/id id}
                                                   [:chef/name
                                                    :chef/description
                                                    :chef/profile-image
                                                    :chef/background-image
                                                    {:chef/food-photos [:src :caption]}])))}))
        {:keys [data isLoading isError error]} (js->clj query :keywordize-keys true)
        {:chef/keys [name description profile-image background-image food-photos]} (get-in data [:data])
        on-create-menu (fn [e]
                         (.preventDefault e)
                         (println "Create Menu clicked")
                         (rfe/navigate :menu {:path-params {:chef-id chef-id}}))
        on-invite-friends (fn [e] (.preventDefault e) (println "Invite Friends clicked"))]
    ($ :div
       (cond
         isLoading ($ :h1 "Loading...")
         isError ($ :h1 (str error))
         :else
         ($ :div.min-h-screen.bg-gray-100
            ($ :div.relative.h-96.bg-cover.bg-center.m-4 {:style {:background-image (str "url(" background-image ")")}}
               ($ :div.absolute.left-8.flex.items-end {:class "-bottom-8 md:left-1/2 md:-ml-16"}
                  ($ :img.w-32.h-32.border-4.border-white.rounded-full.object-cover.shadow-lg.md:w-40.md:h-40
                     {:src profile-image
                      :alt "Profile"})))
            ($ :div.max-w-5xl.mx-auto.px-4.sm:px-6.lg:px-8
               ($ :div.mt-16.md:mt-20
                  ($ :div.text-center.md:text-left
                     ($ :h1.text-3xl.font-bold.text-gray-900 name)
                     ($ :p.mt-1.text-gray-500.text-xl description)))
               ($ :div.mt-6.flex.flex-wrap.gap-4.justify-center.md:justify-start
                  ($ :button.btn "Create Menu")
                  ($ :button.btn "Invite Friends")))
            ($ carousel {:images food-photos}))))))