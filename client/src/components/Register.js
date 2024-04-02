import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import "../css/loginForm.css";
// rsc

const RegisterForm = ({ registerUser, mockUsers, handleLogin }) => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const [msgShow, setMsgShow] = useState(false);
    const [error, setError] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordRepeat: "",
        message: "",
    });

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
        } else if (name === "passwordRepeat") {
            // check if password matches
            const isPasswordMatch = data.password !== "" && value === data.password;
            setError((prevErrors) => ({
                ...prevErrors,
                passwordRepeat: isPasswordMatch ? "" : "Passwords do not match",
            }));
        }
        //clear messages
        setError((prevErrors) => ({
            ...prevErrors,
            message: "",
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if there are any validation errors
        if (
            error.firstName ||
            error.lastName ||
            error.email ||
            error.password ||
            error.passwordRepeat
        ) {
            setError((prevErrors) => ({
                ...prevErrors,
                message: "Please fix all validation errors before submitting.",
            }));
            return;
        }

        try {
            // Proceed with registration
            const user = await registerUser(
                data.firstName,
                data.lastName,
                data.email,
                data.password
            );
            if (user) {
                console.log("New User: ", data,);
                console.log("All Users", mockUsers);
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
    };

    return (
        <>
            <section className="wrapper">
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="inputBox">
                        <input
                            className="inputName"
                            placeholder="First Name"
                            required
                            onChange={handleChange}
                            type="text"
                            name="firstName"
                            defaultValue={data.firstName}
                        // value={data.email}
                        />
                        <input
                            className="inputName lastInput"
                            placeholder="Last Name"
                            required
                            onChange={handleChange}
                            type="text"
                            name="lastName"
                            defaultValue={data.lasttName}
                        // value={data.email}
                        />
                        <FaUser className="icon" />
                    </div>
                    <div className="inputBox">
                        <input
                            placeholder="Example@email.com"
                            required
                            onChange={handleChange}
                            type="text"
                            name="email"
                            defaultValue={data.email}
                        // value={data.email}
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
                            defaultValue={data.password}
                        // value={data.password}
                        />
                        <FaLock className="icon" />
                    </div>
                    {error.password && <div className="errorMsg">{error.password}</div>}

                    <div className="inputBox">
                        <input
                            placeholder="Repeat your password"
                            required
                            onChange={handleChange}
                            type="password"
                            name="passwordRepeat"
                        />
                        <FaLock className="icon" />
                    </div>
                    {error.passwordRepeat && (
                        <div className="errorMsg">{error.passwordRepeat}</div>
                    )}
                    {error.message && (
                        <div className="errorNotification">{error.message}</div>
                    )}
                    <button type="submit">Register</button>
                    <div className="registerLink">
                        <p>
                            Already have an account?
                            <Link className="link" to="/login">
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </section>
        </>
    );
};

export default RegisterForm;
