import axios from "axios"
import { post, getToken, authResolved, authRejected } from "../utils/authentification/auth.action"
import { saveTokenInLocalStorage } from "../utils/authentification/auth.action"

const BASE_URL = 'http://localhost:3001/api/v1/user/'

export const authentification = (store, logCredential) => {
    store.dispatch(post())
    axios.post(`${BASE_URL}login`, {
        email: logCredential.email,
        password: logCredential.password
    }).then(response => {
        store.dispatch(getToken(response.data.body.token))
        getUserProfil(store, logCredential.rememberMe)
    }).catch(error => {
        store.dispatch(authRejected({
            message: error.message,
            status: error.response.status
        }))
    })
}

export const getUserProfil = (store, rememberMe) => {
    const token = store.getState().token
    axios.post(`${BASE_URL}profile`, {}, {
        headers: { 'Authorization': `Bearer ${token}` }
    }).then(response => {
        store.dispatch(authResolved(response.data.body))
        if (rememberMe === true) {
            saveTokenInLocalStorage(response.data.body.token)
            localStorage.setItem('token', JSON.stringify(token))
            localStorage.setItem('isAuthenticate', JSON.stringify(true))
        }
    }).catch(error => {
        store.dispatch(authRejected({
            message: error.message,
            status: error.response.status
        }))
    })
}

export const editUserProfil = (store, token, userInfo) => {
    store.dispatch(post())
    axios.put(`${BASE_URL}profile`, {
        firstName: userInfo.firstName,
        lastName: userInfo.lastName
    }, {
        headers: { 'Authorization': `Bearer ${token}` }
    }).then(response => {
        store.dispatch(authResolved(response.data.body))
    }).catch(error => {
        store.dispatch(authRejected({
            message: error.message,
            status: error.response.status
        }))
    })
}