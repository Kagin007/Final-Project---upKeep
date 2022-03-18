class CreateTimeslots < ActiveRecord::Migration[7.0]
  def change
    create_table :timeslots do |t|
      t.date :date
      t.integer :slots, default: 2
      t.boolean :is_full, default: false  
      t.belongs_to :user
      t.timestamps
    end
  end
end
