(ns yardwerkz.app.core
  (:require [react-native :as rn]
            ["expo" :refer [registerRootComponent]]
            [uix.core :as uix :refer [$ defui]]
            ["reactotron-react-native$default" :as Reactotron]
            [yardwerkz.app.navigation :as nav]
            ["react-native-safe-area-context" :refer [SafeAreaProvider SafeAreaView]]
            [yardwerkz.app.util :as util]
            [reitit.core :as r]
            [reitit.frontend :as rf]
            [refx.alpha :as refx]))
(when js/goog.DEBUG
  (.. Reactotron configure useReactNative connect))

(def styles (rn/StyleSheet.create
             (util/to-js
              {:container
               {:flex true
                :justify-content "center"
                :align-items "center"}
               :screen
               {:font-size 24
                :font-weight "bold"}})))

(defui screen-a []
  ($ SafeAreaView {:style styles.container}
     ($ rn/Text {:style styles.screen} "Screen A")
     ($ rn/Button {:title "Go to screen B" :on-press #(refx/dispatch [:nav/navigate :b {} {:qp 1}])})))

(defui screen-b []
  ($ SafeAreaView {:style styles.container}
     ($ rn/Text {:style styles.screen} "Screen B")
     ($ rn/Button {:title "Go back" :on-press #(refx/dispatch [:nav/go-back])})))

(defui screen-404-error []
  ($ SafeAreaView {:style styles.container}
     ($ rn/Text {:style styles.screen} "Screen not found")))

(def example-routes
  (rf/router
   ["" (nav/stack-navigator)
    ["/a" {:name :a :screen screen-a}]
    ["/b" {:name :b :screen screen-b}]]))

(comment
  (rf/match-by-path example-routes "/a"))

(def animated-timing (.. rn/Animated -timing))

(def animated-view (.. rn/Animated -View))

(defui old-root []
  (let [fade-anim (rn/useAnimatedValue 0)
        fade-in (fn [] (.start
                        (animated-timing
                         fade-anim
                         (util/to-js
                          {:toValue 1
                           :duration 5000
                           :useNativeDriver true}))))
        fade-out (fn [] (.start
                         (animated-timing
                          fade-anim
                          (util/to-js
                           {:toValue 0
                            :duration 3000
                            :useNativeDriver true}))))]
    #_(js/console.log "fade-anim" (.isExtensible js/Object fade-anim) fade-anim animated-view)
    ($ SafeAreaProvider
       ($ SafeAreaView {:style {:flex true :justify-content "center" :align-items "center"}}
          ($ animated-view {:opacity fade-anim}
             ($ rn/Text {:style {:fontSize 24 :fontWeight "bold"}} "Fading in and out"))
          ($ rn/Button {:on-press fade-in :title  "Fade In"})
          ($ rn/Button {:on-press fade-out :title "Fade Out"})))))

(defui root []
  (let [match (refx/use-sub [:nav/match])]
    (if match
      ($ SafeAreaProvider
         ($ nav/display-screen {:match match}))
      ($ screen-404-error))))

(defn init []
  (refx/dispatch [:nav/start example-routes])
  (registerRootComponent (uix/as-react root)))

(comment
  @refx.db/app-db)
