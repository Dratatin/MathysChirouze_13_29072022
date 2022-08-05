import { Link, Navigate } from 'react-router-dom'
import { LoginContext } from '../utils/context'
import { useContext, useEffect, useState } from 'react'
import submitForm from '../services/api'
import axios from "axios"

function SignIn() {
    const { logged, setIsLogged } = useContext(LoginContext)

    const [tokken, setTokken] = useState()
    const [status, setStatus] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        const login = {
            email: document.querySelector("#username").value,
            password: document.querySelector("#password").value
        }
        submitForm(login)
    }

    const submitForm = (loggin) => {
        axios.post('http://localhost:3001/api/v1/user/login', {
            email: loggin.email,
            password: loggin.password
        }).then(res => {
            setStatus(res.data.status)
            setTokken(res.data.body.tokken)
            setIsLoading(false)
        }).catch(error => {
            setError(error);
        })
    }

    useEffect(() => {
        if (status === 200) {
            setIsLogged(true)
        }
    })

    if (logged) {
        return (
            <Navigate to="/user" />
        )
    }
    else {
        return (
            <main className="main main--bgdark">
                <section className="signIn-content">
                    <i className="fa fa-user-circle signIn-content__icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit} className="signIn-content__form">
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        {/* PLACEHOLDER DUE TO STATIC SITE */}
                        {/* <Link onClick={() => setIsLogged(true)} to="/user" className="signIn-content__button">Sign In</Link> */}
                        {/*SHOULD BE THE BUTTON BELOW                       */}
                        <button className="signIn-content__button">Sign In</button>
                    </form>
                    {error ? <span>Mauvais Identifiant ou mot de passe</span> : null}
                </section>
            </main >
        )
    }
}

export default SignIn