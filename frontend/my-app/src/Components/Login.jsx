import React, { useState } from "react";
import './Login.css';

function Login({ setAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock backend logic
    const mockBackend = {
      username: "admin",
      password: "password123",
    };

    if (username === mockBackend.username && password === mockBackend.password) {
      setAuth(true);
      alert("Login Successful");
    } else {
      alert("Invalid Username or Password");
    }
  };
  




  

  return (
    
    <div>
      
       
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;