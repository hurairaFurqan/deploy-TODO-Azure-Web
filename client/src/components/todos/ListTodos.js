import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";

import { getTodos } from "../../store/todoActions";

const ListTodos = ({ todo, setTodo }) => {
    const userInfo = useSelector((state) => state.authRequests.userInfo);
    const auth = useSelector((state) => state.auth);
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodos());
    }, [todo._id, dispatch]);

    return (
        <div className="todoList">
            <h5>{todos.length > 0 ? "" : "noTodosYet"}</h5>
            {todos &&
                todos.map((todo, i) => {
                    return (
                        <Todo todo={todo} key={i} setTodo={setTodo} todos={todos} />
                    );
                })}
        </div>
    );
};

export default ListTodos;
