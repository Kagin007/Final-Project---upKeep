class User < ApplicationRecord
  has_one :location
  has_many :properties
  has_many :timeslots
  has_many :reservations
end
