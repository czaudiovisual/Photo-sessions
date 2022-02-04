
import React, { useEffect, useState } from "react"
import BookingCard from './BookingCard'

function Bookings() {
    const [bookings, setBookings] = useState([])
    
    
    // const bookings =
    
    useEffect(() => {
        fetch("/bookings")
        .then((res) => res.json())
        .then(setBookings)
    }, [])

    return(
        <div>
        <h1>Bookings</h1>
        {bookings.map(book => <BookingCard booking={book} key={book.id}/>)}
        </div>
    )
}

export default Bookings;