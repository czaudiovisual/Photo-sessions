import React, { useState } from "react"



function SignupForm({ setCurrentUser }) {
    const [name, setName] = useState("")
    const [img_profile, setImgProfile] = useState("")
    const [username, setUsername] = useState("")

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
            console.log(res)
            res.json().then(currentUser => {
                setCurrentUser(currentUser)
            })
        })
    }

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleOnSubmit}>
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
                    <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default SignupForm