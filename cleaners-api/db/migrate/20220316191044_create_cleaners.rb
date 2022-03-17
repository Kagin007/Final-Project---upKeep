class CreateCleaners < ActiveRecord::Migration[7.0]
  def change
    create_table :cleaners do |t|

      t.boolean "is_active"
      t.integer "pay_rate"
    
      t.references :user, index: false,
        foreign_key: true

      t.references :location, index: false,
        foreign_key: true
    
      t.timestamps
    end
  end
end
