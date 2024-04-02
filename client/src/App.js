import "./css/App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home, Register, Login } from "./components";

import { loginUser, registerUser, mockUsers } from "./api/mockApiService";

function App() {
  // insert here the token
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    // call the loginUser function here
    setIsLoggedIn(e);
  };

  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <Routes>
            {isLoggedIn && <Route path="/" exact element={<Home />} />}
            <Route path="/register" element={<Register registerUser={registerUser} handleLogin={handleLogin} mockUsers={mockUsers} />} />
            <Route
              path="/login"
              element={
                <Login loginUser={loginUser} handleLogin={handleLogin} />
              }
            />
            <Route path="*" element={<Navigate replace to="/login" />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
