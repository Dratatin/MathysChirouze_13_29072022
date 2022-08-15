import { Navigate } from 'react-router-dom'
import { useStore, useSelector } from "react-redux"
import { postSignIn } from '../services/API'
import Loader from '../components/Loader'
import { useEffect, useState } from 'react'

function SignIn() {
    const store = useStore()
    const logged = useSelector(state => state.auth.isAuthenticate)
    const error = useSelector(state => state.auth.error)
    const status = useSelector(state => state.auth.status)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (status === "pending") {
            setIsLoading(true)
        }
        if (status === "rejected") {
            const timer = setTimeout(() => {
                setIsLoading(false)
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleSubmit = (e) => {
        e.preventDefault()
        const logCredentials = {
            email: "steve@rogers.com",
            password: "password456"
            // email: document.querySelector("#username").value,
            // password: document.querySelector("#password").value,
            // rememberMe: document.querySelector("#remember-me").checked
        }
        postSignIn(store, logCredentials)
    }

    if (logged) {
        return (<Navigate to="/user" />)
    }
    else {
        return (
            <main className="main main--bgdark">
                {isLoading ?
                    <Loader />
                    :
                    <section className="signIn-content">
                        <i className="fa fa-user-circle signIn-content__icon"></i>
                        <h1>Sign In</h1>
                        {error.status === 400 ?
                            <span className="signIn-content__error-message">Mauvais identifiant ou mot de passe</span>
                            : (error.status !== null && error.status !== 400 ?
                                <span className="signIn-content__error-message">Une erreur est survenue : {error.message}</span>
                                : null
                            )
                        }
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
                    </section>
                }
            </main >
        )
    }
}

export default SignIn