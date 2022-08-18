import { createAction } from "@reduxjs/toolkit"

export const post = createAction("auth/post")
export const getToken = createAction("auth/token")
export const authResolved = createAction("auth/resolved")
export const authRejected = createAction("auth/rejected")