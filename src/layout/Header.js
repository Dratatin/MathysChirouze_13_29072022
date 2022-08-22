import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { useDispatch, useSelector } from "react-redux/es/exports"
import { logout } from '../utils/root.action'
import { useNavigate } from 'react-router-dom'

function Header() {
    const logged = useSelector(state => state.isAuthenticate)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = (e) => {
        e.preventDefault()
        localStorage.clear()
        dispatch(logout())
        navigate("/")
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
                        <Link className="header__nav__item" to="./profile">
                            <i className="fa fa-user-circle"></i>
                            {user.firstName}
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