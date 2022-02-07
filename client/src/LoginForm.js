import React, { useState } from "react"
import { Alert } from "react-bootstrap"
import { Button } from 'react-bootstrap'
import SignupForm from "./SignupForm"

function LoginForm({ setCurrentUser }) {
    const [username, setUsername] = useState("")
    const [error, setError] = useState("")

    function handleOnSubmit(event) {
        event.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                username
            }),
        }).then((res) => {
            if (res.ok) {
                res.json().then(currentUser => {
                    setCurrentUser(currentUser)
                })
            } else {
                res.json().then((error => setError(error.error)))
            }
        })
    }

    return (
        <div className="App">
            <h2>Login</h2>
            <form onSubmit={handleOnSubmit}>
                {error ?
                    <Alert variant="danger">{error}</Alert> : <Alert variant="danger="></Alert>
                }
                <input
                    onChange={(event) => setUsername(event.target.value)}
                    value={username}
                    placeholder="Username"
                    type="text"
                    id="username"
                    name="username" />
                {/* <input
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    type="text"
                    id="password"
                    placeholder="Password"
                /> */}
                <Button variant="success" type="submit">Login</Button>{' '}
            </form>
            <br />
            <br />
            <h4>Create an account</h4>
            <SignupForm setCurrentUser={setCurrentUser} />
        </div>
    )
}

export default LoginForm