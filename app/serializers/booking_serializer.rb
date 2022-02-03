class BookingSerializer < ActiveModel::Serializer
  attributes :id, :style, :time, :location, :img_url, :description, :user_id
  belongs_to :user, serializer: UserSerializer

end
