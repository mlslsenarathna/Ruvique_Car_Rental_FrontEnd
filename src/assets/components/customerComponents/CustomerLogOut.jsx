import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CustomerLogOut.css';

function CustomerLogOut({ isOpen, onClose }) {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleConfirmLogout = () => {
        // Clear your session/token here
        localStorage.removeItem('userToken');
        sessionStorage.clear();
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className="logout-overlay">
            <div className="logout-modal fade-in">
                <div className="logout-icon-glow">
                    <i className="bi bi-box-arrow-right"></i>
                </div>
                <h2 className="gold-text">Confirm Logout</h2>
                <p className="text-muted">Are you sure you want to end your premium session?</p>
                
                <div className="logout-actions">
                    <button className="cancel-btn" onClick={onClose}>
                        Stay Logged In
                    </button>
                    <button className="confirm-logout-btn" onClick={handleConfirmLogout}>
                        Yes, Log Out
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CustomerLogOut;