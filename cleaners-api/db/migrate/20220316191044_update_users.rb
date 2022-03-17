class UpdateUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :role, :string
    add_column :users, :pay_rate, :int
    add_column :users, :list_of_properties, :text, array: true, default: []
    add_column :users, :location_id, :int
    remove_column :users, :is_admin
    add_foreign_key :users, :locations
  end
end

