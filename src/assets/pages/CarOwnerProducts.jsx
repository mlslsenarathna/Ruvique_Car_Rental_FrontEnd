import CarOwnerNavbar from "../components/CarOwnerNavbar";
import CarOwnerCard from "../components/carownerComponents/CarOwnerCard";
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CarOwnerProducts() {
   

    return (
    <>
    <CarOwnerNavbar />
    <div className="container mt-4">
        <CarOwnerCard/>
    </div>
    </>    
    );
}   

export default CarOwnerProducts;