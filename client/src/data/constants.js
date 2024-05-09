export const API_BASEURL_AUTH = "web-version-todo-app.azurewebsites.net/auth"
export const API_BASEURL_USER = "web-version-todo-app.azurewebsites.net/users"
export const API_BASEURL_TODO = "web-version-todo-app.azurewebsites.net/api"

export const setHeaders = () => {
    const headers = {
        headers: {
            "Bearer": localStorage.getItem("token"),
        },
    };

    return headers;
};
