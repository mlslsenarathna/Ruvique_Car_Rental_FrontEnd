function CustomerSettings() {
    return (
        <div className="customer-settings">
            <div className="tab-content fade-in">
                                <h3 className="gold-text">Account Settings</h3> 
                                <section className="info-section mt-4">
                                    <h3 className="gold-text">Personal Details</h3>
                                    <div className="complex-form">
                                        <div className="input-row">
                                            <div className="field">
                                                <label>Full Name</label>
                                                <input type="text" defaultValue="Amantha Perera" />
                                            </div>
                                            <div className="field">
                                                <label>Email Address</label>
                                                <div className="input-with-badge">
                                                    <input type="email" defaultValue="amantha@gmail.com" />
                                                    <span className="badge-verified">Verified</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-row">
                                            <div className="field">
                                                <label>Phone</label>
                                                <div className="input-with-badge">
                                                    <input type="text" defaultValue="+94 77 123 4567" />
                                                    <span className="badge-unverified">Unverified</span>
                                                </div>
                                            </div>
                                            <div className="field">
                                                <label>Residential Address</label>
                                                <input type="text" defaultValue="72/A Luxury Ave, Colombo" />
                                            </div>
                                        </div>
                                        <button className="save-btn">Update Profile Information</button>
                                    </div>
                                </section>
                            </div>
        </div>
    );
}
export default CustomerSettings;