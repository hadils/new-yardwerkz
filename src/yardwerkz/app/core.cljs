(ns yardwerkz.app.core
  (:require [react :as r]
            [react-native :as rn]
            ["expo" :refer [registerRootComponent]]
            [uix.core :as uix :refer [$ defui]]
            #_["reactotron-react-native$default" :as Reactotron]
            [yardwerkz.app.navigation :as nav]
            [yardwerkz.app.styles :as s]
            ["react-native-safe-area-context" :refer [SafeAreaProvider SafeAreaView]]
            ["@react-navigation/native" :refer [useNavigation]]
            ["expo-font" :refer [getLoadedFonts]]
            [yardwerkz.app.util :as util]
            [reitit.core :as reitit]
            [taoensso.telemere :as t]))

#_(when js/goog.DEBUG
    (.. Reactotron configure useReactNative connect))

(defui screen-a []
  (let [navigation (useNavigation)]
    (js/console.log "loaded fonts:" (getLoadedFonts))
    ($ SafeAreaView {:style s/styles.container}
       ($ rn/Text {:style s/styles.heading} "Screen A")
       ($ rn/Button {:on-press #(.navigate navigation "B") :title "Go to screen B"}))))

(defui screen-b []
  (let [navigation (useNavigation)]
    ($ SafeAreaView {:style s/styles.container}
       ($ rn/Text {:style s/styles.heading} "Screen B")
       ($ rn/Button {:on-press #(.goBack navigation) :title "Go back"}))))

(def example-router
  (nav/native-stack
   [["/a" {:name "A" :component screen-a}]
    ["/b" {:name "B" :component screen-b}]]))

(defui root []
  (let [[loaded? error] (s/use-fonts)]
    (js/console.log "error = " error)
    ($ r/StrictMode
       ($ SafeAreaProvider
          (when loaded?
            ($ nav/navigation-container {:router example-router}))))))

(defn init []
  (registerRootComponent (uix/as-react root)))
