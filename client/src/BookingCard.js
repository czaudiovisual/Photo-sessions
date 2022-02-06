import './App.css';
import { useState } from "react"
import { Card, Button } from "react-bootstrap"
import EditBookingForm from './EditBookingForm'

function BookingCard({ booking, removeBooking, currentUser, editBooking }) {

    const [editBookingForm, setEditBookingForm] = useState(false)
    const [editButton, setEditButton] = useState("Show edit Form")

    function handleDeleteBooking(booking) {
        fetch(`/bookings/${booking.id}`, {
            method: 'DELETE'
        }).then(res => {
            removeBooking(booking)
        })
    }

    function handleEditButtonClick() {
        setEditBookingForm(!editBookingForm)
        !editBookingForm ? setEditButton("Hide Edit Form") : setEditButton("Show edit Form")
    }

    return (
        <div className="card-box">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className="img-size" alt="img-url" src={booking.img_url} />
                <Card.Body>
                    <Card.Title>{booking.style}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Time: {booking.time}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Date: {booking.date}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Location: {booking.location}</Card.Subtitle>
                    <Card.Text>Description: {booking.description}</Card.Text>
                    <Button variant="danger" onClick={event => handleDeleteBooking(booking)}>Delete</Button>
                    <Button variant="primary" onClick={event => handleEditButtonClick()}>{editButton}</Button>
                    {editBookingForm ? <EditBookingForm handleEditButtonClick={handleEditButtonClick} editBooking={editBooking} booking={booking} currentUser={currentUser}/> : null}
                </Card.Body>
            </Card>
        </div>
    )
}

export default BookingCard;
