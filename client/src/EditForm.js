import React, { useState } from "react"
import { Button } from "react-bootstrap"

function EditForm({ currentUser, booking, editBooking, handleEditButtonClick }) {
    const [style, setStyle] = useState(booking.style)
    const [img_url, setImgUrl] = useState(booking.img_url)
    const [time, setTime] = useState(booking.time)
    const [date, setDate] = useState(booking.date)
    const [location, setLocation] = useState(booking.location)
    const [description, setDescription] = useState(booking.description)

    function handleOnSubmit(event) {
        event.preventDefault()
        setStyle("")
        setImgUrl("")
        setTime("")
        setDate("")
        setLocation("")
        setDescription("")
        fetch(`/bookings/${booking.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                style,
                img_url,
                time,
                date,
                location,
                description,
                user_id: currentUser.id
            }),
        })
            .then(res => res.json())
            .then(b => {
                editBooking(b)
                handleEditButtonClick()
            })
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <br />
                <h5>Edit your booking</h5>
                <input
                    onChange={(event) => setStyle(event.target.value)}
                    className="form-field"
                    value={style}
                    placeholder="Style"
                    type="text"
                    id="style"
                    name="style" />
                <input
                    onChange={(event) => setImgUrl(event.target.value)}
                    className="form-field"
                    value={img_url}
                    placeholder="Img Url"
                    type="text"
                    id="img_url"
                    name="img_url" />
                <input
                    onChange={(event) => setTime(event.target.value)}
                    className="form-field"
                    value={time}
                    placeholder="Time"
                    type="text"
                    id="time"
                    name="time" />
                <input
                    onChange={(event) => setDate(event.target.value)}
                    className="form-field"
                    value={date}
                    placeholder="Date"
                    type="text"
                    id="date"
                    name="date" />
                <input
                    onChange={(event) => setLocation(event.target.value)}
                    className="form-field"
                    value={location}
                    placeholder="Location"
                    type="text"
                    id="location"
                    name="location" />
                <textarea
                    onChange={(event) => setDescription(event.target.value)}
                    className="form-field"
                    value={description}
                    placeholder="Description"
                    type="text"
                    id="description"
                    name="description" />
                <br />
                <Button variant="success" size="sm" type="submit">Edit</Button>
            </form>

        </div>
    )
}

export default EditForm