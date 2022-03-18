class CreateRatings < ActiveRecord::Migration[7.0]
  def change
    create_table :ratings do |t|
      t.integer :rating
      t.belongs_to :reservation
      t.text :review
      t.belongs_to :user

      t.timestamps
    end
  end
end
