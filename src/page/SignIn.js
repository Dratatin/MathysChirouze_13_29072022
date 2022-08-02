import { NavLink } from 'react-router-dom'

function SignIn() {
    return (
        <main className="main main--bgdark">
            <section className="signIn-content">
                <i className="fa fa-user-circle signIn-content__icon"></i>
                <h1>Sign In</h1>
                <form className="signIn-content__form">
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    {/* PLACEHOLDER DUE TO STATIC SITE */}
                    <NavLink to="/user" className="signIn-content__button">Sign In</NavLink>
                    {/*SHOULD BE THE BUTTON BELOW
                    <button className="sign-in-button">Sign In</button>
                    */}
                </form>
            </section>
        </main>
    )
}

export default SignIn