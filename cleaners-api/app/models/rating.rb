class Rating < ApplicationRecord
  belongs_to :reservation
  belongs_to :user
  validates :rating, :inclusion => { :in => 0..100 }
end
