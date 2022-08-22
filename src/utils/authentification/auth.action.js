import { createAction } from "@reduxjs/toolkit"
import { getUserProfil } from "../../services/API"

export const post = createAction("auth/post")
export const getToken = createAction("auth/token")
export const authResolved = createAction("auth/resolved")
export const authRejected = createAction("auth/rejected")

export const saveTokenInLocalStorage = (token) => {
    localStorage.setItem('token', JSON.stringify(token))
}

export const checkAutoLogin = (store, dispatch) => {
    const tokenString = localStorage.getItem('token')
    if (!tokenString) {
        return
    }
    const token = JSON.parse(tokenString)
    dispatch(getToken(token))
    dispatch(post())
    getUserProfil(store)
}