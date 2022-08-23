import authReducer from "./features/authentification"
import { createAction } from "@reduxjs/toolkit"
// import { userReducer } from "./user.reducer"
// import { combineReducers } from "redux"

// const combinedReducer = combineReducers({
//     user: userReducer,
//     auth: authReducer,
// });

export const logout = createAction("logout")

export const rootReducer = (state, action) => {
    if (action.type === 'logout') { // check for action type 
        state = undefined
    }
    return authReducer(state, action)
}