import React, { useState } from "react";
import './Register.css';
function Register({ setAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock backend logic
    const mockBackend = {
      username: "admin",
      password: "password123",
      email: "admin@example.com",
    };

    if (username === mockBackend.username && password === mockBackend.password && email === mockBackend.email) {
      setAuth(true);
      alert("Registration Successful");
    } else {
      alert("Invalid Registration Details");
    }
  };

  return (
    <div>
      
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;