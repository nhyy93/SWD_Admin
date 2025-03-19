import React, { useState } from 'react';
import './AdminLogin.css';
import { useNavigate } from 'react-router-dom';
import bikeImage from "../../assets/bike.png";
const VerifyCode = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();

    const handleVerify = () => {
        if (code === '123456') {
            alert('Password reset successfully');
            navigate('/');
        } else {
            alert('Invalid verification code');
        }
    };

    return (
        <div className="admin-login-page">
            <div className="overlay"></div>
            <div className="login-card">
                <div className="login-form">
                    <h2>Verify Code</h2>
                    <input type="text" placeholder="Enter verification code"
                        value={code} onChange={(e) => setCode(e.target.value)} />
                    <input type="password" placeholder="Enter new password"
                        value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    <button onClick={handleVerify}>Reset Password</button>
                </div>

                <div className="login-image">
                    <img src={bikeImage} alt="Bicycle" />
                </div>
            </div>
        </div>
    );
};

export default VerifyCode;
