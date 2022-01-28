class BookingSerializer < ActiveModel::Serializer
  attributes :id, :style, :time, :location, :img_url, :description
end
