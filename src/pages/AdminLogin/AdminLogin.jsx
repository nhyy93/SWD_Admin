import React, { useState } from 'react';
import './AdminLogin.css';
import { useNavigate } from 'react-router-dom';
import bikeImage from "../../assets/bike.png";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";

const AdminLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email === 'admin@gmail.com' && password === 'admin123') {
            navigate('/admin');
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <div className="admin-login-page">
            <div className="overlay"></div>
            <div className="login-card">
                <div className="login-form">
                    <h2>Admin Login</h2>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="admin@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="btn-signin" onClick={handleLogin}>Sign In</button>

                    <div className="continue">Or Continue With</div>
                    <div className="social-icons">
                        <div className="social-btn google"><FaGoogle /></div>
                        <div className="social-btn github"><FaGithub /></div>
                        <div className="social-btn facebook"><FaFacebook /></div>
                    </div>

                    <p className="forgot" onClick={() => navigate('/forgot')}>Forgot Password?</p>
                </div>

                <div className="login-image">
                    <img src={bikeImage} alt="Bicycle" />
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
