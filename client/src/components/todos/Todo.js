import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteTodo, checkTodo } from "../../store/todoActions";

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${month < 10 ? "0" + month : month}/${day < 10 ? "0" + day : day
        }/${year}`;
};

const Todo = ({ todo, setTodo, todos }) => {
    const [formattedDate, setFormattedDate] = useState("");
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.authRequests.userInfo);

    const handleOnUpdateClick = (id) => {
        const foundTodo = todos.find((todo) => todo._id === id);
        setTodo({ ...foundTodo });
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleCheck = (id) => {
        dispatch(checkTodo(id));
    };

    const moreStyle = {
        color: "#8f8f8f",
    };

    const checkedStyle = {
        textDecoration: "line-through",
    };

    useEffect(() => {
        setFormattedDate(formatDate(todo.date));
    }, [todo.date]);

    return (
        <li className="todoStyle row">
            <div className="col row">
                <input
                    className="m-10"
                    type="checkbox"
                    defaultChecked={todo.isComplete}
                    onChange={() => handleCheck(todo._id)}
                />
                {todo.isComplete ? (
                    <p className="col" style={checkedStyle}>
                        {todo.name}
                    </p>
                ) : (
                    <p className="col">{todo.name}</p>
                )}
                <p className="col" style={moreStyle}>
                    {formattedDate}
                </p>
            </div>
            <div>
                <div>
                    {/* ----------do not delete this comment ---------*/}
                    {/* {todo.isComplete ? (
                            <button
                                className="btn btn-success"
                                onClick={() => handleCheck(todo._id)}
                            >
                                ✔️
                            </button>
                        ) : (
                            <button
                                className="btn btn-outline-success"
                                onClick={() => handleCheck(todo._id)}
                            >
                                ❌
                            </button>
                        )} */}
                    <button
                        className="btn btn-info"
                        onClick={() => handleOnUpdateClick(todo._id)}
                    >
                        ✏️
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(todo._id)}
                    >
                        🗑️
                    </button>
                </div>
            </div>
        </li>
    );
};

export default Todo;
