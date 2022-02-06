import React, { useEffect, useState } from "react"
import BookingCard from './BookingCard'
import BookingForm from './BookingForm';

function Bookings({ currentUser }) {
    const [bookings, setBookings] = useState([])

    function addBooking(booking) {
        setBookings([...bookings, booking])
    }

    function removeBooking(booking) {
        setBookings((bookings) => bookings.filter(book => book.id !== booking.id))
    }

    useEffect(() => {
        fetch("/bookings")
            .then((res) => res.json())
            .then(setBookings)
    }, [])

    return (
        <div>
            <h1>Bookings</h1>
            {bookings.map(book => <BookingCard currentUser={currentUser} booking={book} key={book.id} removeBooking={removeBooking} />)}
            <BookingForm currentUser={currentUser} addBooking={addBooking} />
        </div>
    )
}

export default Bookings