import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './page/Home'
import SignIn from './page/SignIn'
import Profile from './page/Profile'
import Header from './layout/Header'
import Footer from './layout/Footer'
import { useDispatch, useStore } from 'react-redux'
import { useEffect } from 'react'
import { checkAutoLogin } from './utils/authentification/auth.action'

function App() {
    const dispatch = useDispatch()
    const store = useStore()
    useEffect(() => {
        checkAutoLogin(store, dispatch)
    })
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/sign-in' element={<SignIn />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App