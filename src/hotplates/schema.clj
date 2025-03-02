(ns hotplates.schema)

(def schema
  {:user/id :uuid
   :user [:map {:closed true}
          [:xt/id                     :user/id]
          [:user/email                :string]
          [:user/joined-at            inst?]
          [:user/foo {:optional true} :string]
          [:user/bar {:optional true} :string]]

   :msg/id :uuid
   :msg [:map {:closed true}
         [:xt/id       :msg/id]
         [:msg/user    :user/id]
         [:msg/text    :string]
         [:msg/sent-at inst?]]

   :chef/id :uuid
   :chef [:map {:closed true}
          [:xt/id :chef/id]
          [:chef/user :user/id]
          [:chef/name :string]
          [:chef/description :string]
          [:chef/background-image :string]
          [:chef/profile-image :string]
          [:chef/food-photos [:vector
                              [:map {:closed true}
                               [:src :string]
                               [:caption :string]]]]
          [:chef/created-at inst?]
          [:chef/updated-at inst?]]

   :menu/id :uuid
   :menu [:map {:closed true}
          [:xt/id :menu/id]
          [:menu/chef :chef/id]
          [:menu/started-at :string]
          [:menu/ended-at :string]
          [:menu/delivery-method :string]
          [:menu/cuisines [:set :string]]
          [:menu/status [:enum :current :archived :canceled]]
          [:menu/dietary-restrictions [:set :string]]]

   :dish/id :uuid
   :dish [:map {:closed true}
          [:xt/id :dish/id]
          [:dish/menu :menu/id]
          [:dish/name :string]
          [:dish/description :string]
          [:dish/servinges :int]
          [:dish/price :int]
          [:dish/currency :string]
          [:dish/created-at inst?]
          [:dish/updated-at inst?]]})

(def module
  {:schema schema})
