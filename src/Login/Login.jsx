import "./Login.css"
import React, { useState } from 'react'
import Logo from "../../src/assets/DentalLogo.svg"
import { useNavigate } from "react-router-dom"

function Login() {
    const [error, setError] = useState("")
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form)

        // sent data to server and get return, if any error,teke error code.
        // .then(() => {

        // }).catch((error) => {
        //     if (error.code === errorCode) {
        //         setError("this email is not registered")
        //     }
        // })
        setForm(() => ({
            email: "",
            password: ""
        }));

    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }))
    }


    return (
        <div className="loginContainer">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <form className="loginForm" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div>
                    <input type="email" onChange={handleChange} value={form.email} id="email" name="email" required />
                    <p>Enter your email</p>
                </div>
                <div>
                    <input type="password" onChange={handleChange} value={form.password} id="password" name="password" required />
                    <p>Password</p>
                </div>
                <div className="source">
                    <p>{error}</p>
                    <a>Forgot password?</a>
                </div>
                <button type="submit">Login</button>
            </form>

            {/* remove this */}
            <button onClick={() => { navigate("/Dashboard") }} className='gotoButton' > go to dashboard</button>

        </div>
    )
}

export default Login
