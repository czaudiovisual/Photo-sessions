

function BookingCard({ booking }) {
    return (
        <div>
            <div>
            <h1>{booking.style}</h1>
            <img src={booking.img_url} />
            <h3>Time: {booking.time}</h3>
            <h3>Date: {booking.date}</h3>
            <h3>Location: {booking.location}</h3>
            <h3>Description: {booking.description}</h3>
            </div>
        </div>
    )
}

export default BookingCard;