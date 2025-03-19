import React, { useState } from 'react';
import './AdminLogin.css';
import { useNavigate } from 'react-router-dom';
import bikeImage from "../../assets/bike.png";
const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSendCode = () => {
        alert('Verification code sent to your email!');
        navigate('/verify');
    };

    return (
        <div className="admin-login-page">
            <div className="overlay"></div>
            <div className="login-card">
                <div className="login-form">
                    <h2>Forgot Password</h2>
                    <input type="email" placeholder="Enter your email" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <button onClick={handleSendCode}>Send Verification Code</button>
                </div>

                <div className="login-image">
                    <img src={bikeImage} alt="Bicycle" />
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
