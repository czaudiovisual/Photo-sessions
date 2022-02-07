import React, { useState } from "react"
import { Alert, Button } from "react-bootstrap"


function BookingForm({ currentUser, addBooking }) {
    const [style, setStyle] = useState("")
    const [img_url, setImgUrl] = useState("")
    const [time, setTime] = useState("")
    const [date, setDate] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState("")

    function handleOnSubmit(event) {
        event.preventDefault()
        setStyle("")
        setImgUrl("")
        setTime("")
        setDate("")
        setLocation("")
        setDescription("")
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
                user_id: currentUser.id
            }),
        }).then((response) => {
            if (response.ok) {
                response.json().then(book => addBooking(book))
            } else {
                response.json().then(errors => {
                    setErrors(errors.errors)
                })
            }
        })
        // .then(res => res.json())
        // .then(book => addBooking(book))
    }

    const displayError = () => {
        return errors.map(error => {
            return <div className="alert alert-danger" role="alert">{error}</div>
        })
    }

    return (
        <div className="body-app">
            <div className="form-outsider">
                <div className="form-container">
                    <form className="register-form" onSubmit={handleOnSubmit}>
                        {errors ?
                            <Alert variant="danger">{errors && displayError()}</Alert> : <Alert variant="danger="></Alert>
                        }
                        <h5>Book you photo session</h5>
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
                        <Button variant="success" type="submit">Add Booking</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BookingForm