import "./css/App.css";
import { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import LoginForm from "./components/Login";
import RegisterForm from "./components/Register";
import HomeForm from "./components/Home";





function App() {
  const { token, user } = useContext(AuthContext);
  return (
    <div className="App">
      <div className="App-header">


        {token ? (
          user ? (
            <Routes>
              <Route path="/home" element={<HomeForm></HomeForm>}></Route>
            </Routes>
          ) : (
            <p>loading...</p>
          )
        ) : (
          <Routes>
            <Route path="/" element={<LoginForm></LoginForm>}></Route>
            <Route path="/register" element={<RegisterForm></RegisterForm>}></Route>
          </Routes>
        )}


        {/* <Routes>
          { }
          <Route path="/register" element={<RegisterForm />} />
          <Route
            path="/"
            element={
              <LoginForm />
            }
          />
          {token && user && <Route path="/" exact element={<HomeForm />} />}
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
