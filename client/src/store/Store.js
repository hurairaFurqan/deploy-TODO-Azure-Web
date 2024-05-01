import { configureStore } from "@reduxjs/toolkit";
import  AuthRequests  from "../reducers/AuthRequests"



const Store = configureStore({
    reducer: {
        authRequests: AuthRequests,
    }
})

export default Store;