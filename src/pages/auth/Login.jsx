import React, { useState } from "react";
import "../../styles/Login.css";
import { login } from "../../api/endpoints/auth";

function Login() {

  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    try {
        e.preventDefault();
        setError(null);

      let res = await login({ username, password });

      localStorage.setItem("token", res.token);

      // Redirect and refresh page
      window.location.href = "/e3-apps/peak-shaving-and-alerts";
    } catch (error) {
        console.log(error);
        setError("Invalid username and password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Login</h2>

        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
              />
              

              {error && (
                  <p className="error">{error}</p>
              )}

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
