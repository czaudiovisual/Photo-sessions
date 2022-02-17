class Booking < ApplicationRecord

    belongs_to :user
    validates_presence_of :style
    
# def self.find_future_bookings_by_location(location)
#     bookings = Booking.all.find_all{ |booking| booking.location == location}
#     date_booking = bookings.find_all{ |booking| booking.date < Date.today.strftime("%m/%d/%y")}
#     date_booking.filter{|booking| booking.date.to_s}.last
# end
# def self.find_future_bookings_by_location(location)
#     bookings = Booking.all.find_all{ |booking| booking.location == location}
#     bookings.find_all{ |booking| Date.parse(booking.date) >= Date.today}
# end
end

# class method called find_future_bookings by location
# method accept one parameter :location find all the bookings with that location that are in the future
# how to find current date
