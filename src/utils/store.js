import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./authReducer";

export const store = configureStore({
    reducer: postReducer
})