import axios from "axios";
import { API_BASEURL_TODO, setHeaders } from "../data/constants";

export const getTodos = () => {

    return (dispatch) => {
        axios
            .get(`${API_BASEURL_TODO}/todos`, setHeaders())
            .then((todos) => {
                dispatch({
                    type: "GET_TODOS",
                    todos: todos.data 
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

// export const getTodos = () => {
//     return async (dispatch) => {
//         try {
//             const response = await axios.get(`${API_BASEURL_TODO}/todos`, setHeaders());
//             dispatch({
//                 type: 'GET_TODOS',
//                 todos: response.data // Extract only the data
//             });
//         } catch (error) {
//             console.error(error);
//         }
//     };
// };

export const addTodo = (newTodo, author, _id) => {
    return (dispatch) => {
        axios
            .post(
                `${API_BASEURL_TODO}/todos`,
                { ...newTodo, author, _id },
                setHeaders()
            )
            .then((todo) => {
                dispatch({
                    type: "ADD_TODO",
                    todo,
                });
            })
            .catch((error) => {
                console.log(error.response);

                // toast.error(error.response?.data, {
                //     position: toast.POSITION.BOTTOM_RIGHT,
                // });
            });
    };
};

export const updateTodo = (updatedTodo, id) => {
    return (dispatch) => {
        axios
            .put(`${API_BASEURL_TODO}/todos/${id}`, updatedTodo, setHeaders())
            .then((todo) => {
                dispatch({
                    type: "UPDATE_TODO",
                    todo,
                });
            })
            .catch((error) => {
                console.log(error);
                // toast.error(error.response?.data, {
                //     position: toast.POSITION.BOTTOM_RIGHT,
                // });
            });
    };
};

export const deleteTodo = (id) => {
    return (dispatch) => {
        axios
            .delete(`${API_BASEURL_TODO}/todos/${id}`, setHeaders())
            .then(() => {
                dispatch({
                    type: "DELETE_TODO",
                    id,
                });
            })
            .catch((error) => {
                console.log(error);
// toast.error(error.response?.data, {
//     position: toast.POSITION.BOTTOM_RIGHT,
// });
            });
    };
};

export const checkTodo = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.patch(`${API_BASEURL_TODO}/todos/${id}`);
            dispatch({
                type: 'CHECK_TODO',
                todo: response.data
            });
            response.data("response.data", response)
        } catch (error) {
            console.error(error);
        }
    };
};

// export const checkTodo = (id) => {

//     return (dispatch) => {
//         axios
//             .get(`${API_BASEURL_TODO}/todos/${id}`, setHeaders())
//             .then((todos) => {
//                 dispatch({
//                     type: "CHECK_TODOS",
//                     todos: todos.data
//                 });
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     };
// };
// export const checkTodo = (id) => {
//     return async (dispatch) => {
//         try {
//             const response = await axios.patch(`${API_BASEURL_TODO}/todos/${id}`);
//             dispatch({
//                 type: 'CHECK_TODO',
//                 todo: response.data
//             }); 
//         } catch (error) {
//             console.error(error);
//         }
//     };
// };
