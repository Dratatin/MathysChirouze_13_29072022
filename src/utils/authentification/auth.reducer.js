const initialState = {
    status: "void",
    error: {
        message: null,
        status: null
    },
    token: null,
    isAuthenticate: false,
    user: {
        id: null,
        firstName: null,
        lastName: null
    },
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case "auth/post":
            if (state.status === "void") {
                return {
                    ...state,
                    status: "pending"
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
            if (state.status === "resolved") {
                return {
                    ...state,
                    status: "updating"
                }
            }
            break
        case "auth/resolved":
            if (state.status === "pending" || state.status === "updating") {
                return {
                    ...state,
                    status: "resolved",
                    isAuthenticate: true,
                    user: {
                        ...state.user,
                        id: action.payload.id,
                        firstName: action.payload.firstName,
                        lastName: action.payload.lastName
                    }
                }
            }
            break
        case "auth/rejected":
            if (state.status === "pending" || state.status === "updating") {
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
        case "auth/token": {
            return {
                ...state,
                token: action.payload,
            }
        }
        default:
            return state
    }
}