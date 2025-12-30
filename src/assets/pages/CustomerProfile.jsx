import React, { useState, useEffect } from 'react';
import CustomerNavbar from "../components/CustomerNavbar";
import "./CustomerProfile.css";
import dp from "../images/dp.jpg";
import CustomerItentitySecurity from '../components/customerComponents/CustomerItentity&Security';
import CustomerPay from '../components/customerComponents/CustomerPay';
import CustomerSettings from '../components/customerComponents/CustomerSettings';
import CustomerSupport from '../components/customerComponents/CustomerSupport';
import CustomerLogOut from '../components/customerComponents/CustomerLogOut';
import axios from 'axios';

function CustomerProfile() {
    const [activeTab, setActiveTab] = useState('identity');
    const [verificationLevel, setVerificationLevel] = useState(65);
    const [customerData, setCustomerData] = useState(null);
        const nic = sessionStorage.getItem("customerNIC");
        useEffect(() => {
        if (!nic) {
            window.location.href = "/login";
        } else {
            axios.get(`http://localhost:8888/customer/getCustomerByNic/${nic}`)
                .then(res => {
                    console.log("Customer Data:", res.data);
                    setCustomerData(res.data);
                })
                .catch(err => {
                    console.error("Error fetching owner data:", err);
                });
        }
    }, [nic]);
    return (
        <div className="luxury-dashboard">
            <CustomerNavbar />
            
            <div className="dashboard-container">
                <header className="dashboard-header">
                    <div className="user-brand">
                        <div className="avatar-container">
                            <img src={dp} alt="Profile" className="main-avatar" />
                            <div className="status-ring"></div>
                        </div>
                        <div className="user-meta">
                           <h1>{customerData?.name}</h1>
                            <div className="d-flex align-items-center gap-2">
                                <span className="membership-tier">GOLD PRIVILEGE</span>
                                {/* --- STAR RATING ADDED HERE --- */}
                                <div className="user-rating-stars">
                                    <i className="bi bi-star-fill gold-star"></i>
                                    <i className="bi bi-star-fill gold-star"></i>
                                    <i className="bi bi-star-fill gold-star"></i>
                                    <i className="bi bi-star-fill gold-star"></i>
                                    <i className="bi bi-star-fill gold-star"></i>
                                    <span className="rating-count">(4.9)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="header-stats">
                        {/* --- RATING PILL ADDED TO STATS --- */}
                        <div className="stat-pill">
                            <label>Driver Quality</label>
                            <span className="gold-text">Excellent</span>
                        </div>
                        <div className="stat-pill">
                            <label>Wallet Balance</label>
                            <span className="gold-text">LKR 45,500.00</span>
                        </div>
                        <div className="stat-pill">
                            <label>Trust Score</label>
                            <span className="gold-text">850 / 1000</span>
                        </div>
                    </div>
                </header>

                <div className="main-grid">
                    <aside className="side-nav">
                        <nav>
                            <button className={activeTab === 'identity' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveTab('identity')}>
                                <i className="bi bi-shield-check"></i> Identity & Security
                            </button>
                            <button className={activeTab === 'payments' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveTab('payments')}>
                                <i className="bi bi-wallet2"></i> Payments & Wallet
                            </button>
                            <button className={activeTab === 'history' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveTab('history')}>
                                <i className="bi bi-clock-history"></i> Rental History
                            </button>
                            <button className={activeTab === 'settings' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveTab('settings')}>
                                <i className="bi bi-gear"></i> Account Settings
                            </button>
                            <button className={activeTab === 'support' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveTab('support')}>
                                <i className="bi bi-life-preserver"></i> Support & Help
                            </button>
                            <button className={activeTab==='logout' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveTab('logout') }>
                                <i className="bi bi-box-arrow-right"></i> Logout
                            </button>
                        </nav>
                        
                        <div className="verification-meter">
                            <div className="meter-text">
                                <span>Profile Completion</span>
                                <span>{verificationLevel}%</span>
                            </div>
                            <div className="meter-bar">
                                <div className="meter-fill" style={{width: `${verificationLevel}%`}}></div>
                            </div>
                        </div>
                    </aside>

                    <main className="content-area">
                        {activeTab === 'identity' && (
                          <>
                            <CustomerItentitySecurity />
                
                          </>
                        )}

                        {activeTab === 'payments' && (
                           <>
                           <CustomerPay/>
                           </>
                        )}

                        {activeTab === 'settings' && (
                            <>
                             <CustomerSettings/>
                            </>
                          
                        )}

                        {activeTab === 'support' && (
                            <>
                            <CustomerSupport/>
                            </>
                        )}
                        {activeTab==='logout' && (
                            <>
                            <CustomerLogOut isOpen={true} onClose={() => setActiveTab('identity')} />
                            </>
                            
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}

export default CustomerProfile;