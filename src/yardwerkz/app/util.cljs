(ns yardwerkz.app.util
  (:require
   ["axios$default" :as axios]
   [camel-snake-kebab.core :as csk]
   [cognitect.transit :as t]
   [com.wsscode.pathom3.connect.operation.transit :as pcot]))

(defn to-js
  "Convert cljs data to js. Keywords are converted to camelCase strings."
  [cljs-data]
  (clj->js cljs-data :keyword-fn #(-> % name csk/->camelCase)))

(defn from-js
  "Convert js data to cljs. camelCase keys are converted to kebab-case keywords."
  [js-data]
  (let [keys-fn
        (fn keys-fn [m]
          (cond
            (map? m)
            (reduce-kv (fn [accum k v]
                         (assoc accum (csk/->kebab-case-keyword k) (keys-fn v))) {} m)
            (vector? m)
            (mapv keys-fn m)
            (coll? m)
            (map keys-fn m)
            :else m))]
    (keys-fn (js->clj js-data))))

(defn pathom-op
  [entity eql]
  (axios/post "/api/v1/pathom"
              {:pathom/entity entity
               :pathom/eql eql
               :pathom/lenient-mode? true}
              (to-js
               {:headers {"Accept" "application/transit+json"
                          "Content-Type" "application/transit+json"}
                :transform-request (fn [data]
                                     (let [writer (t/writer :json-verbose
                                                            {:handlers pcot/write-handlers})]
                                       (t/write writer data)))
                :transform-response (fn [data]
                                      (let [reader (t/reader :json-verbose
                                                             {:handlers  pcot/read-handlers})]
                                        (t/read reader data)))})))
