import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg';

function Header() {
    const isAuthenticated = true
    return (
        <header className="header">
            <nav className="header__nav">
                <NavLink className="header__nav__logo" to="/" >
                    <img
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only" > Argent Bank</h1>
                </NavLink>
                {isAuthenticated ? (
                    <div>
                        <NavLink className="header__nav__item" to="./sign-in">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </NavLink>
                    </div>
                ) : (
                    < div >
                        <NavLink className="header__nav__item" to="./sign-in">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </NavLink>
                    </div>
                )}
            </nav>
        </header >
    )
}

export default Header