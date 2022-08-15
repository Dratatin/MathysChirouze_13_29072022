import { authReducer } from "./auth.reducer";
import { userReducer } from "./user.reducer";
import { combineReducers } from "redux";

const combinedReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
});

export const rootReducer = (state, action) => {
    if (action.type === 'logout') { // check for action type 
        state = undefined;
    }
    return combinedReducer(state, action);
};