class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_profile, :username, :password_digest
  has_many :bookings, serializer: BookingSerializer
end
