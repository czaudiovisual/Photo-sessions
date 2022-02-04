

function BookingCard({ booking }) {
    return (
        <div>
            <h1>{booking.style}</h1>
            <img src={booking.img_url} alt="img-url"/>
            <h3>Time: {booking.time}</h3>
            <h3>Date: {booking.date}</h3>
            <h3>Location: {booking.location}</h3>
            <h3>Description: {booking.description}</h3>
        </div>
    )
}

export default BookingCard;