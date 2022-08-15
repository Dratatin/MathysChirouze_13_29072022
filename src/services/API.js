import axios from "axios"

import { login, authResolved, authRejected } from "../utils/auth.action"
import { logged, userResolved, userRejected } from "../utils/user.action"

export const postSignIn = ((store, logCredential) => {
    store.dispatch(login())
    axios.post('http://localhost:3001/api/v1/user/login', {
        email: logCredential.email,
        password: logCredential.password
    }).then(response => {
        store.dispatch(authResolved(response.data.body.token))
    }).catch(error => {
        store.dispatch(authRejected({
            message: error.message,
            status: error.response.status
        }))
    })
})

export const getUserProfil = ((store, token) => {
    store.dispatch(logged())
    axios.post('http://localhost:3001/api/v1/user/profile', {}, {
        headers: { 'Authorization': `Bearer ${token}` }
    }).then(response => {
        store.dispatch(userResolved(response.data.body))
    }).catch(error => {
        store.dispatch(userRejected({
            message: error.message,
            status: error.response.status
        }))
    })
})

