const initialState = {
    status: "void",
    error: {
        message: null,
        status: null
    },
    isAuthenticate: false,
    token: null
}

export const login = () => ({ type: "login" })
export const logout = () => ({ type: "logout" })
export const postResolved = (token) => ({ type: "resolved", payload: token })
export const postRejected = (error) => ({ type: "rejected", payload: error })

export function postReducer(state = initialState, action) {
    switch (action.type) {
        case "login":
            if (state.status === "void") {
                return {
                    ...state,
                    status: "pending",
                }
            }
            if (state.status === "rejected") {
                return {
                    ...state,
                    error: {
                        ...state.error,
                        message: null,
                        status: null
                    },
                    status: "pending"
                }
            }
            break
        case "resolved":
            if (state.status === "pending") {
                return {
                    ...state,
                    status: "resolved",
                    isAuthenticate: true,
                    token: action.payload
                }
            }
            break
        case "rejected":
            if (state.status === "pending") {
                return {
                    ...state,
                    status: "rejected",
                    error: {
                        ...state.error,
                        message: action.payload.message,
                        status: action.payload.status
                    },
                    isAuthenticate: false
                }
            }
            break
        case "logout":
            if (state.isAuthenticate === true) {
                return {
                    ...state,
                    status: "void",
                    error: {
                        ...state.error,
                        message: null,
                        status: null
                    },
                    isAuthenticate: false,
                    token: null
                }
            }
            break
        default:
            return state
    }
}