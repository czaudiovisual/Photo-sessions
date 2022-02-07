class User < ApplicationRecord
    has_many :bookings
    validates_presence_of :name, :img_profile
    validates :username, presence: true, uniqueness: true
    
end
