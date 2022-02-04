import React, { useState } from "react"

function BookingForm() {
    const [style, setStyle] = useState('')
    const [img_url, setImgUrl] = useState('')
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')

    function handleOnSubmit(event) {
        event.preventDefault()
        fetch("/bookings", {
            method: "POST",
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
                // user_id: user.id
            }), 
        }).then(res => res.json())
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
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

export default BookingForm