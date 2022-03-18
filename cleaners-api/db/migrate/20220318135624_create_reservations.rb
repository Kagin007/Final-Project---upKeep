class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.belongs_to :user
      t.date :booking_date
      t.integer :cleaner_id
      t.belongs_to :property

      t.timestamps
    end
  end
end
