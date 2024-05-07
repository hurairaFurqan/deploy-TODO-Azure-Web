export const API_BASEURL_AUTH = "http://localhost:3000/auth"
export const API_BASEURL_USER = "http://localhost:3000/users"
export const API_BASEURL_TODO = "http://localhost:3000/api"

export const setHeaders = () => {
    const headers = {
        headers: {
            "x-auth-token": localStorage.getItem("token"),
        },
    };

    return headers;
};
