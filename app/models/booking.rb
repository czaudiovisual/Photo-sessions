class Booking < ApplicationRecord
    belongs_to :user
    validates_presence_of :style, :time, :date, :location, :img_url, :description
end
