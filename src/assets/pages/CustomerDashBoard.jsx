import CustomerNavbar from "../components/CustomerNavbar";
import React from "react";
import './CustomerDashBoard.css';

function CustomerDashboard() {
    return (
        <>
            <div>
                <CustomerNavbar />
            </div>
            <div className="container_Box_1">
                <h3>Current Rental</h3>
                <p>Mercedes S-Class</p>
            </div>
        </>


    );
}
export default CustomerDashboard;