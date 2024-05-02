import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LogoutButton from "../context/logoutBtn";
import AddTodo from "./todos/AddTodo";
import ListTodos from "./todos/ListTodos";

const Home = (props) => {
    const userInfo = useSelector((state) => state.authRequests.userInfo);
    const [todo, setTodo] = useState({
        name: "",
        isComplete: false,
    });

    return (
        <div>
            <button style={{ backgroundColor: "white" }}>{userInfo.firstName}</button>
            <LogoutButton />
            {userInfo ? (
                <>
                    <AddTodo todo={todo} setTodo={setTodo} />
                    <ListTodos todo={todo} setTodo={setTodo} />
                </>
            ) : (
                <>
                    <ListTodos todo={todo} setTodo={setTodo} />
                </>
            )}
        </div>
    );
};

export default Home;
