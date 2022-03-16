class Locations < ActiveRecord::Migration[7.0]
  def change
    create_table :locations do |t|
      t.string :address
      t.string  :city
      t.string :province
      t.integer :longitude
      t.integer :latitude
      t.datetime "created_at",  null: false
      t.datetime "updated_at",  null: false
    end
  end
end

