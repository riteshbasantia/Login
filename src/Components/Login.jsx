import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import {useNavigate} from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          setEmail("eve.holt@reqres.in");
          setPassword("5cityslicka");
          setMessage("Login successful");
          navigate('/dashboard');
        } else if (data.error) {
          setMessage(data.error);
        }
      });
  };

  return (
    <div className="container mt-5  w-50">
      <form>
        <h1>Welcome</h1>
        <p>Enter your Username & Password</p>
        <div className="container mt-2 w-50 p-3">
          <div class="form-outline mb-4">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="&#xf007;   Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="form-outline mb-4">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="&#xf023;   Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            class="btn btn-primary btn-block mb-4 w-100 p-2"
          >
            Login
          </button>

          <div class="row mb-4">
            <div class="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>
        </div>
      </form>
      {message && <div className="alert alert-info">{message}</div>}
    </div>
  );
}

export default Login;
