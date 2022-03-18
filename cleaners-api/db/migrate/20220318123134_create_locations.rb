class CreateLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :locations do |t|
      t.text :address
      t.string :city
      t.string :country
      t.decimal :longitude, precision: 10, scale: 6
      t.decimal :latitude, precision: 10, scale: 6
      t.belongs_to :user
      t.timestamps
    end
  end
end
