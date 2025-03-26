import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './AdminLogin.css';
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import bikeImage from "../../assets/bike.png";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        username,
        password: userPassword,
      });

      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("email", response.data.email);

      if (response.data.role === "ADMIN") {
        navigate("/admin/dashboard");
      } else {
        setError("You do not have permission to access this page.");
      }
    } catch (err) {
      setError("Invalid admin username or password");
    }
  };

  return (
    <div className="admin-login-page">
      <div className="overlay"></div>
      <div className="login-card">
        <div className="login-form">
          <h2>Admin Login</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleLogin}>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="********"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              required
            />
            <button className="btn-signin" type="submit">Sign In</button>
          </form>

          <div className="continue">Or Continue With</div>
          <div className="social-icons">
            <div className="social-btn google"><FaGoogle /></div>
            <div className="social-btn github"><FaGithub /></div>
            <div className="social-btn facebook"><FaFacebook /></div>
          </div>

          <p className="forgot" onClick={() => navigate("/forgot")}>Forgot Password?</p>
        </div>

        <div className="login-image">
          <img src={bikeImage} alt="Bicycle" />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
