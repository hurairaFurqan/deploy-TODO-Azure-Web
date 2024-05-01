import "./css/App.css";
import { useEffect } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import LoginForm from "./components/Login";
import RegisterForm from "./components/Register";
import HomeForm from "./todos/Home";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "./store/AuthRequests";





function App() {

  const dispatch = useDispatch();
  const userToken = useSelector(
    (state) => state.authRequests.userToken
  );
  const userInfo = useSelector(
    (state) => state.authRequests.userInfo
  );

  console.log(userInfo);

  useEffect(() => {
    dispatch(getMe());
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        {userToken ? (
          userInfo ? (
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
      </div>
    </div>
  );
}

export default App;
