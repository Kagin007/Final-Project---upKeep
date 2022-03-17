class CreatePropertiesTable < ActiveRecord::Migration[7.0]
  def change
    create_table :properties do |t|
      t.references :user, null: false, foreign_key: true
      t.references :location, null: false, foreign_key: true
      t.timestamps
    end
    rename_column :users, :type, :role
  end
end
