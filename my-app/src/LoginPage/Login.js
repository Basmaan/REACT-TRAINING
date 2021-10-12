import React, { useState } from 'react'
import './Login.css'

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Username is: ' + username);
        setUsername('');
        setPassword('');
    }

    return (
        <div className="login-page">
            <div className="form">
                <h3>LOGIN</h3>
                <p>Please enter your credentials to LOGIN</p>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
