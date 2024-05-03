import { configureStore } from "@reduxjs/toolkit";
import AuthRequests from "../reducers/AuthRequests"
import TodoRequests from "../reducers/todoReducer"



const Store = configureStore({
    reducer: {
        authRequests: AuthRequests,
        todos: TodoRequests,
    }
})

export default Store;