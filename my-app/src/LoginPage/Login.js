import React, { useState } from 'react'
import './Login.css'

const initialValue = { username: "", password: "" }

function Login() {

    const [value, setValue] = useState(initialValue);

    const login = () => {

        const data = {
            "email": value.username,
            "password": value.password,
        }

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }

        const fetchRes = fetch("https://reqres.in/api/login", options)
        return fetchRes;
    }

    const handleSubmit = (e) => {
        const response = login();
        e.preventDefault();
        response.then(res => res.json()).then(data => {
            if (data.token) {
                alert("Login sucessful");
                setValue(initialValue);
            }
            else {
                alert(data.error);
            }
        })
    }

    return (
        <div className="login-page">
            <div className="form">
                <h3>LOGIN</h3>
                <p>Please enter your credentials to LOGIN</p>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" value={value.username} onChange={(e) => setValue({ ...value, username: e.target.value })} />
                    <input type="password" placeholder="Password" value={value.password} onChange={(e) => setValue({ ...value, password: e.target.value })} />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
