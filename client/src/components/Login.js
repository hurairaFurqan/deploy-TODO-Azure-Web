import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/loginForm.css";
// rsc


const LoginForm = ({ loginUser, handleLogin }) => {
    const [data, setData] = useState({ email: "", password: "" });

    const [msgShow, setMsgShow] = useState(false);
    const [error, setError] = useState({ email: "", password: "", message: "" });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });

        // set validation on type
        if (name === "email") {
            // Example email validation
            const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            setError((prevErrors) => ({
                ...prevErrors,
                email: isValidEmail ? "" : "Invalid email address",
            }));
        } else if (name === "password") {
            // Example password validation
            const isValidPassword = value.length >= 6;
            setError((prevErrors) => ({
                ...prevErrors,
                password: isValidPassword
                    ? ""
                    : "Password must be at least 6 characters",
            }));
        }
        setError((prevErrors) => ({
            ...prevErrors,
            message: "",
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await loginUser(data.email, data.password);
            if (user) {
                handleLogin(true);
                navigate("/");
            } else {
                setError((prevErrors) => ({
                    ...prevErrors,
                    message: "Invalid email or password",
                }));
            }
        } catch (error) {
            setMsgShow(true);
            setError((prevErrors) => ({
                ...prevErrors,
                message: "An error occurred while logging in",
            }));
        }

        // try {
        // 	const url = "http://localhost:8080/api/auth";
        // 	const { data: res } = await axios.post(url, data);
        // 	localStorage.setItem("token", res.data);
        // 	navigate('/');
        // } catch (error) {
        // 	if (
        // 		error.response &&
        // 		error.response.status >= 400 &&
        // 		error.response.status <= 500
        // 	) {
        // 		setError(error.response.data.message);
        // 	}
        // }
    };

    return (
        <>
            <section className="wrapper">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="inputBox">
                        <input
                            placeholder="Example@email.com"
                            required
                            onChange={handleChange}
                            type="text"
                            name="email"
                            defaultValue={data.email || ""}
                            autoComplete="off"
                        />
                        <MdEmail className="icon" />
                    </div>
                    {error.email && <div className="errorMsg">{error.email}</div>}

                    <div className="inputBox">
                        <input
                            placeholder="Type your password"
                            required
                            onChange={handleChange}
                            type="password"
                            name="password"
                            defaultValue={data.password || ""}
                        />
                        <FaLock className="icon" />
                    </div>
                    {error.password && <div className="errorMsg">{error.password}</div>}
                    {error.message && (
                        <div className="errorNotification">{error.message}</div>
                    )}
                    <button type="submit">Log In</button>

                    <div className="registerLink">
                        <p>
                            Don't have an account?
                            <Link className="link" to="/register">
                                Register
                            </Link>
                        </p>
                    </div>
                </form>
            </section>
        </>
    );
};

export default LoginForm;
