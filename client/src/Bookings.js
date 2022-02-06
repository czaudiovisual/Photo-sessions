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

    function editBooking(booking){
        const edited = booking.map(book => {
            if (booking.id === book.id) {
                return booking
            }
            return book
        })
        setBookings(edited)
    }

    useEffect(() => {
        fetch("/bookings")
            .then((res) => res.json())
            .then(setBookings)
    }, [])

    return (
        <div className="App">
            <div>
                <h1>Bookings</h1>
                {bookings.map(book => <BookingCard editBooking={editBooking}currentUser={currentUser} booking={book} key={book.id} removeBooking={removeBooking} />)}
            </div>
            <div>
                <BookingForm currentUser={currentUser} addBooking={addBooking} />
            </div>
        </div>
    )
}

export default Bookings