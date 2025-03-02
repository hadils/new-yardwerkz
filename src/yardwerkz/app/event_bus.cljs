(ns yardwerkz.app.event-bus)

(defonce listeners (atom {}))

(defn subscribe [event callback]
  (swap! listeners update event conj callback))

(defn unsubscribe [event callback]
  (swap! listeners update event (fn [callbacks] (remove #{callback} callbacks))))

(defn publish [event & args]
  (doseq [callback (get @listeners event)]
    (apply callback args)))

(comment
  (subscribe :my-event #(js/console.log "Event received with args:" %&))
  (publish :my-event "arg1" "arg2")
  (unsubscribe :my-event #(js/console.log "Event received with args:" %&))
  (publish :my-event "arg1" "arg2"))
