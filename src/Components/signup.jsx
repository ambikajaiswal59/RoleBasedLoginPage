import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        // email: '',
        password: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});

    // Function to validate input fields
    // const validateFields = () => {
    //     let newErrors = {};

    //     if (!formData.username.trim()) {
    //         newErrors.username = 'Username is required!';
    //     }
    //     // if (!formData.email.trim()) {
    //     //     newErrors.email = 'Email is required!';
    //     // } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    //     //     newErrors.email = 'Invalid email format!';
    //     // }
    //     if (!formData.password) {
    //         newErrors.password = 'Password is required!';
    //     } else if (formData.password.length < 8 || !/\d/.test(formData.password) || !/[!@#$%^&*]/.test(formData.password)) {
    //         newErrors.password = 'Password must be 8+ characters with at least 1 number & special character!';
    //     }
    //     if (!formData.confirmPassword) {
    //         newErrors.confirmPassword = 'Please confirm your password!';
    //     } else if (formData.password !== formData.confirmPassword) {
    //         newErrors.confirmPassword = 'Passwords do not match!';
    //     }

    //     setErrors(newErrors);
    //     return Object.keys(newErrors).length === 0;
    // };

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' }); // Remove error when user starts typing
    };

    // Handle signup logic
    const handleSignup = () => {
        debugger
       // if (!validateFields()) return;

        // Simulating user registration
        localStorage.setItem('userName', formData.username);
        localStorage.setItem('userPassword', formData.password);
        alert('✅ Signup successful! Please log in.');
        navigate('/login');
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl">
                <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
                <p className="text-gray-600 text-center mb-6">Create an account to continue</p>

                {/* Username Input */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">
                        Username <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="username"
                        className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                </div>

                {/* Email Input */}
                {/* <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Email*</label>
                    <input
                        type="email"
                        name="email"
                        className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div> */}

                {/* Password Input */}
                <div className="mb-4 relative">
                    <label className="block text-sm font-semibold mb-2">Password<span className="text-red-500">*</span></label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 pr-10"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button
                        type="button"
                        className="absolute top-10 right-3 text-gray-500 focus:outline-none"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>

                {/* Confirm Password Input */}
                <div className="mb-4 relative">
                    <label className="block text-sm font-semibold mb-2">Confirm Password<span className="text-red-500">*</span></label>
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 pr-10"
                        placeholder="Re-enter your password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    <button
                        type="button"
                        className="absolute top-10 right-3 text-gray-500 focus:outline-none"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                    {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                </div>

                {/* Signup Button */}
                <button
                    onClick={handleSignup}
                    className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
                >
                    Sign Up
                </button>

                {/* Already have an account? */}
                <p className="text-sm text-center mt-4">
                    Already have an account? <a href="login" className="text-blue-500"> Log in</a>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;
