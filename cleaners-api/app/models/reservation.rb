class Reservation < ApplicationRecord
  belongs_to :user
  has_one :rating
end
