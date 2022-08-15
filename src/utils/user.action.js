import { createAction } from "@reduxjs/toolkit"

export const logged = createAction("user/logged")
export const userResolved = createAction("user/resolved")
export const userRejected = createAction("user/rejected")

