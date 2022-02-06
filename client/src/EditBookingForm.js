import React, { useState } from "react"

function EditBooking({ currentUser, booking, editBooking, handleEditBooking }) {
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
            .then( res => res.json())
            .then(book => {
                editBooking(book)
                handleEditBooking(book)
            })
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <p>Edit your booking</p>
                <input
                    onChange={(event) => setStyle(event.target.value)}
                    value={style}
                    placeholder="Style"
                    type="text"
                    id="style"
                    name="style" />
                <input
                    onChange={(event) => setImgUrl(event.target.value)}
                    value={img_url}
                    placeholder="Img Url"
                    type="text"
                    id="img_url"
                    name="img_url" />
                <input
                    onChange={(event) => setTime(event.target.value)}
                    value={time}
                    placeholder="Time"
                    type="text"
                    id="time"
                    name="time" />
                <input
                    onChange={(event) => setDate(event.target.value)}
                    value={date}
                    placeholder="Date"
                    type="text"
                    id="date"
                    name="date" />
                <input
                    onChange={(event) => setLocation(event.target.value)}
                    value={location}
                    placeholder="Location"
                    type="text"
                    id="location"
                    name="location" />
                <input
                    onChange={(event) => setDescription(event.target.value)}
                    value={description}
                    placeholder="Description"
                    type="text"
                    id="description"
                    name="description" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditBooking