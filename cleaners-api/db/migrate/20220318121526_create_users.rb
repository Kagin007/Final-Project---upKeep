class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :password_digest
      t.string :email
      t.string :picture_url
      t.string :role
      t.integer :pay_rate
      t.text :list_of_properties, array: true, default: []
      
      t.timestamps
    end
  end
end
