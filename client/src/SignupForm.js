import React, { useState } from "react"
import { Alert } from 'react-bootstrap'
import { Button } from 'react-bootstrap'



function SignupForm({ setCurrentUser }) {
    const [name, setName] = useState("")
    const [img_profile, setImgProfile] = useState("")
    const [username, setUsername] = useState("")
    const [errors, setErrors] = useState("")

    const displayError = () => {
        return errors.map(error => {
            return <div className="alert alert-danger" role="alert">{error}</div>
        })
    }

    function handleOnSubmit(event) {
        event.preventDefault()
        fetch("/users", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                img_profile: img_profile,
                username: username
            }),
        }).then((res) => {
            if (res.ok) {
                res.json().then(currentUser => {
                    setCurrentUser(currentUser)
                })
            } else {
                res.json().then((errors => setErrors(errors.errors)))
            }
        })
    }

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleOnSubmit}>
                {errors ?
                    <Alert variant="danger">{errors && displayError()}</Alert> : <Alert variant="danger="></Alert>
                }
                <input
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name" />
                <input
                    onChange={(event) => setImgProfile(event.target.value)}
                    value={img_profile}
                    placeholder="Img Profile"
                    type="text"
                    id="img_profile"
                    name="img_profile" />
                <input
                    onChange={(event) => setUsername(event.target.value)}
                    value={username}
                    placeholder="username@hello.com"
                    type="text"
                    id="username"
                    name="username" />
                <Button variant="success" type="submit">Sign Up</Button>{' '}
            </form>
        </div>
    )
}

export default SignupForm