import React, { useState } from "react";
import './Login.css';

function Login({ setAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");  // State for error message

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock backend logic for authentication
    const mockBackend = {
      username: "admin",
      password: "password123",  
    };

    if (username === mockBackend.username && password === mockBackend.password) {
      setAuth(true);
      alert("Login Successful");
    } else {
      setError("Invalid Username or Password");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Login</button>

        {/* Social Media Login Links */}
        <div className="social-links">
          <a href="https://accounts.google.com" className="google">Login with Google</a>
        </div>
      </form>
    </div>
  );
}

export default Login;