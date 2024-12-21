import React, { useState } from "react";
import './Login.css';
import logo from "../Assets/logo2.svg"; 
import { Link } from "react-router-dom";

function Login({ setAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    if (email === "admin@example.com" && password === "123456") {
      setAuth(true);
      alert("Login Successful!");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="logo-container">
          <img src={logo} alt="Madarek Logo" className="logo" />
        </div>
        
        <h2>Login</h2>
        
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        {error && <div className="error">{error}</div>}

        <div className="center-wrapper">
          <div className="button-container">
            <button type="submit">Login</button>
          </div>
        </div>
        
        <div className="links">
          <a href="#">Forgot Password?</a>
          <Link to="/register">Create New Account</Link>
        </div>
      </form>
    </div>
  );
}

export  default  Login;