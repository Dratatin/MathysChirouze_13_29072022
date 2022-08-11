import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { logout } from '../utils/authReducer'
import { useDispatch, useSelector } from "react-redux/es/exports"

function Header() {
    const logged = useSelector(state => state.isAuthenticate)
    const dispatch = useDispatch()

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(logout())
    }

    return (
        <header className="header">
            <nav className="header__nav">
                <Link className="header__nav__logo" to="/" >
                    <img
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only" > Argent Bank</h1>
                </Link>
                {!logged ? (
                    <div>
                        <Link className="header__nav__item" to="./sign-in">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </Link>
                    </div>
                ) : (
                    <div>
                        <Link className="header__nav__item" to="./user">
                            <i className="fa fa-user-circle"></i>
                            Tony
                        </Link>
                        <Link onClick={handleLogout} className="header__nav__item" to="./">
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </Link>
                    </div>
                )}
            </nav>
        </header >
    )
}

export default Header