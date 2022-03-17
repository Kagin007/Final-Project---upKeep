class Reservation < ApplicationRecord
  belongs_to :user
  has_one :rating
  has_one :property
end
