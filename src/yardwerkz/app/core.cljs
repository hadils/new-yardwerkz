(ns yardwerkz.app.core
  (:require [react-native :as rn]
            ["expo" :refer [registerRootComponent]]
            [uix.core :as uix :refer [$ defui]]))

(defui root []
  ($ rn/View {:style {:flex 1
                      :align-items :center
                      :justify-content :center}}
     ($ rn/Text {:style {:font-size 32
                         :font-weight "500"
                         :text-align :center}}
        "Hello! 👋")))

(defn init []
  (registerRootComponent (uix/as-react root)))
