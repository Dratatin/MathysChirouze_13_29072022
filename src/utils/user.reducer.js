const initialState = {
    status: "void",
    error: {
        message: null,
        status: null
    },
    id: null,
    firstName: null,
    lastName: null
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case "user/logged":
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
            return state
        case "user/resolved":
            if (state.status === "pending") {
                return {
                    ...state,
                    status: "resolved",
                    id: action.payload.id,
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName
                }
            }
            return state
        case "user/rejected":
            if (state.status === "pending") {
                return {
                    ...state,
                    status: "rejected",
                    error: {
                        ...state.error,
                        message: action.payload.message,
                        status: action.payload.status
                    },
                }
            }
            return state
        default:
            return state
    }
}