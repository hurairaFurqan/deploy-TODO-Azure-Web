import React, { useNavigate, useState } from "react";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import "../css/loginForm.css";
import { useDispatch } from "react-redux";
import { getSignIn, getSignUp } from "../store/AuthRequests";


const LoginForm = (props) => {

    const dispatch = useDispatch();
    const { handleSuccess } = props;
    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState({ email: "", password: "", message: "" });


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
        
        dispatch(getSignIn(data));
        window.location.href = '/home';
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
