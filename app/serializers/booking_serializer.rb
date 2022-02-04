class BookingSerializer < ActiveModel::Serializer
  attributes :id, :style, :date, :time, :location, :img_url, :description, :user_id
  belongs_to :user, serializer: UserSerializer

end
