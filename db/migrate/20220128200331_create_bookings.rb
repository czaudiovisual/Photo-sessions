class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|

      t.string :style
      t.string :time
      t.string :date
      t.string :location
      t.string :img_url
      t.string :description
      t.belongs_to :user, null: false, foreign_key: true
      
      t.timestamps
    end
  end
end
