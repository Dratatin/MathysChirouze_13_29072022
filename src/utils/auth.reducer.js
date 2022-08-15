const initialState = {
    status: "void",
    error: {
        message: null,
        status: null
    },
    isAuthenticate: false,
    token: null
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case "auth/login":
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
        case "auth/resolved":
            if (state.status === "pending") {
                return {
                    ...state,
                    status: "resolved",
                    isAuthenticate: true,
                    token: action.payload
                }
            }
            break
        case "auth/rejected":
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
        default:
            return state
    }
}