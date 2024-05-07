import "./css/App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import LoginForm from "./components/Login";
import RegisterForm from "./components/Register";
import HomeForm from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "./store/AuthRequests";
import RequireAuth from "./context/RequireAuth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);


  return (
    <div className="App">
      <div className="App-header">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />

          <Route element={<RequireAuth />}>
            <Route path="/home" element={<HomeForm />} />
          </Route>


          {/* {userToken ? (
            <Route path="/home" element={<HomeForm></HomeForm>}></Route>
          ) : (
            <>
              <Route path="/" element={<LoginForm></LoginForm>}></Route>
              <Route
                path="/register"
                element={<RegisterForm></RegisterForm>}
              ></Route>
            </>
          )} */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
