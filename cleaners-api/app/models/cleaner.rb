class Cleaner < ApplicationRecord
  belongs_to :user
  has_one :location
end

# belongs_to
# has_one
# has_many
# has_many :through
# has_one :through
# has_and_belongs_to_many