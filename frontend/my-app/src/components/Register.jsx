import React, { useState } from "react";
import './Register.css';

function Register({ setAuth }) {
  const [usertName, setUserName] = useState("");

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock backend logic
    const mockBackend = {
     
      password: "password123",
      email: "admin@example.com",
    };

    if (  password === mockBackend.password && email === mockBackend.email) {
      setAuth(true);
      alert("Registration Successful");
    } else {
      alert("Invalid Registration Details");
    }
  };

  return (
    <div className="register-container">
      <div className="form">
        <h2 className="h2">Register</h2>
        <p className="sign-up-message">Sign up now and get full access to our app!</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="user Name"
            value={usertName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="input"
          />
         
          
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input"
          />
          <button type="submit" className="button">Register</button>
        </form>

        <div className="website-links">
          <h3>Explore these websites:</h3>
          <ul>
            <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Google</a></li>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">Amazon</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div>
        <img 
          src="https://3.bp.blogspot.com/-Xum-ok7rlm8/TplSmL73JgI/AAAAAAAAAgE/1G3WH5deJM0/s1600/%25D9%2583%25D8%25AA%25D8%25A8-%25D9%2581%25D9%258A%25D9%2583%25D8%25AA%25D9%2588%25D8%25B1.gif" 
          alt="Book" 
          className="book-image" 
        />
      </div>
    </div>
  );
}

export default Register;