import React, { useState } from "react"
import SignupForm from "./SignupForm"

function LoginForm({ setCurrentUser }) {
    const [username, setUsername] = useState("")

    function handleOnSubmit(event) {
        event.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ username }),
        }).then((res) => {
            console.log(res)
            res.json().then(currentUser => {
                setCurrentUser(currentUser)
            })
        })
    }

    return (
        <div className="App">
            <h2>Login</h2>
            <form onSubmit={handleOnSubmit}>
                <input
                    onChange={(event) => setUsername(event.target.value)}
                    value={username}
                    placeholder="Username"
                    type="text"
                    id="username"
                    name="username" />
                <button type="submit">Login</button>
            </form>
            <br />
            <br />
            <h4>Create an account</h4>
            <SignupForm setCurrentUser={setCurrentUser}/>
        </div>
    )
}

export default LoginForm