import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { API_BASEURL_USER } from "../data/constants";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const tokenLocal = JSON.parse(window.localStorage.getItem("token"));
    const [token, setToken] = useState(tokenLocal);
    const [user, setUser] = useState();
    useEffect(() => {

        if (token) {

            (async () => {
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
                const res = await axios.get(`${API_BASEURL_USER}/getme`, config);
                setUser(res.data);
            })()
        }
    }, [token])
    const login = (tk, uData) => {
        window.localStorage.setItem("token", JSON.stringify(tk));
        setToken(tk);
        setUser(uData)
    }
    return (<AuthContext.Provider value={{ token, user, login }}>{children}</AuthContext.Provider>)
}