import "../css/Home.css";
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

    return (<>

        <div className="header">
            <h3 >Welcome back {userInfo.firstName}!</h3>
            <div className="menu"><LogoutButton /></div>

        </div>
        <div className="container">
            <h1 className="mb-10">Get things done!</h1>
            <AddTodo todo={todo} setTodo={setTodo} />

            <ListTodos todo={todo} setTodo={setTodo} />

        </div></>
    );
};

export default Home;
