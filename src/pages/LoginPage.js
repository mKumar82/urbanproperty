import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Assuming you use axios for HTTP requests


function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an HTTP request to your login API endpoint
      const response = await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password,
      });

      // Assuming the response contains a success message or token
      if (response.status === 200) {
        // Call onLogin function to update authentication state
        onLogin();
        // Redirect to home or another page after successful login
        navigate("/");
      }
    } catch (err) {
      // Handle errors (e.g., display an error message)
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
