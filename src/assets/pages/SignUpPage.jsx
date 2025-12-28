import React, { useState } from 'react';
import './SignUpPage.css';
import axios from 'axios';

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        nic: '',
        phone: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        district: '',
        postalCode: '',
        country: '',
        password: '',
        role: 'Customer',
    });

    const [fileName, setFileName] = useState('Upload clear photo');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    const handleRoleChange = (newRole) => {
        setFormData(prev => ({ ...prev, role: newRole }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8888/user/newRegistration', formData)
        .then(res=>console.log(res)).catch(err=>console.log(err));
        
    };

    return (
        <div className="signUp-page-container">
            <div className="bg-glow-effect"></div>
            <div className="bg-glow-effect secondary"></div>

            <div className="form-signin-wrapper">
                <form className="my-custom-form" onSubmit={handleSubmit}>
                    <h2 className="text-color text-center mb-4">Create Account</h2>

                    <label className="small-label text-color">Select Role</label>
                    <div className="category-toggle">
                        <button 
                            type="button" 
                            className={formData.role === 'Customer' ? 'active' : ''} 
                            onClick={() => handleRoleChange('Customer')}
                        >
                            Customer
                        </button>
                        <button 
                            type="button" 
                            className={formData.role === 'Car_Owner' ? 'active' : ''} 
                            onClick={() => handleRoleChange('Car_Owner')}
                        >
                            Car Owner
                        </button>
                    </div>

                    <div className="mb-3">
                        <label className="small-label text-color">Full Name</label>
                        <input 
                            type="text" 
                            className="custom-input" 
                            name="name" 
                            placeholder="John Doe" 
                            value={formData.name}
                            onChange={handleChange}
                            required 
                        />
                    </div>

                    <div className="row-flex mb-3">
                        <div className="flex-item">
                            <label className="small-label text-color">Email Address</label>
                            <input 
                                type="email" 
                                className="custom-input" 
                                name="email" 
                                placeholder="name@example.com" 
                                value={formData.email}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className="flex-item">
                            <label className="small-label text-color">Phone Number</label>
                            <input 
                                type="tel" 
                                className="custom-input" 
                                name="phone" 
                                placeholder="+94..."
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="row-flex mb-3">
                        <div className="flex-item">
                            <label className="small-label text-color">NIC Number</label>
                            <input 
                                type="text" 
                                className="custom-input" 
                                name="nic" 
                                placeholder="123456789V"
                                value={formData.nic}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex-item">
                            <label className="small-label text-color">Password</label>
                            <input 
                                type="password" 
                                className="custom-input" 
                                name="password" 
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="divider-container">
                        <div className="divider-line"></div>
                        <span className="small-label text-color" style={{margin: 0}}>Address Details</span>
                        <div className="divider-line"></div>
                    </div>

                    <div className="mb-3">
                        <label className="small-label text-color">Address Line 1</label>
                        <input 
                            type="text" 
                            className="custom-input" 
                            name="addressLine1" 
                            placeholder="Street No."
                            value={formData.addressLine1}
                            onChange={handleChange}
                        />
                    </div>
                     <div className="mb-3">
                        <label className="small-label text-color">Address Line 2</label>
                        <input 
                            type="text" 
                            className="custom-input" 
                            name="addressLine2" 
                            placeholder="Street Address"
                            value={formData.addressLine2}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="row-flex mb-3">
                        <div className="flex-item">
                            <label className="small-label text-color">City</label>
                            <input 
                                type="text" 
                                className="custom-input" 
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex-item">
                            <label className="small-label text-color">District</label>
                            <input 
                                type="text" 
                                className="custom-input" 
                                name="district"
                                value={formData.district}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="row-flex mb-4">
                        <div className="flex-item">
                            <label className="small-label text-color">Postal Code</label>
                            <input 
                                type="text" 
                                className="custom-input" 
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex-item">
                            <label className="small-label text-color">Country</label>
                            <input 
                                type="text" 
                                className="custom-input" 
                                name="country" 
                                value={formData.country}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="small-label text-color">Profile Photo</label>
                        <label htmlFor="photo-upload" className="file-label-custom">
                            {fileName}
                        </label>
                        <input 
                            type="file" 
                            id="photo-upload" 
                            className="hidden-input" 
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>

                    <button type="submit" className="my-sign-btn" >REGISTER NOW</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;