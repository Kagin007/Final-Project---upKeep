class Property < ApplicationRecord
  has_one :location
  has_one :user
end
