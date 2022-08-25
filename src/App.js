import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Login from './page/Login'
import Profile from './page/Profile'
import Header from './layout/Header'
import Footer from './layout/Footer'
import { useDispatch, useStore } from 'react-redux'
import { useEffect } from 'react'
import { getUserProfil } from './services/API'
import { authFetching } from './redux/features/authentification'

function App() {
    const dispatch = useDispatch()
    const store = useStore()

    useEffect(() => {
        const checkAutoLogin = (store, dispatch) => {
            const tokenString = localStorage.getItem('token')
            if (!tokenString) {
                return
            }
            const token = JSON.parse(tokenString)
            dispatch(authFetching())
            getUserProfil(store, token)
        }

        checkAutoLogin(store, dispatch)
    })

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App