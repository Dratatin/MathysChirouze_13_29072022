import { createAction } from "@reduxjs/toolkit"

export const login = createAction("auth/login")
export const authResolved = createAction("auth/resolved")
export const authRejected = createAction("auth/rejected")