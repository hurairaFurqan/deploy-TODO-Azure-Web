export const API_BASEURL_AUTH = "https://ic722.azurewebsites.net/auth"
export const API_BASEURL_USER = "https://ic722.azurewebsites.net/users"
export const API_BASEURL_TODO = "https://ic722.azurewebsites.net/api"

export const setHeaders = () => {
    const headers = {
        headers: {
            "x-auth-token": localStorage.getItem("token"),
        },
    };

    return headers;
};
