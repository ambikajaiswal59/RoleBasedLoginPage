import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login";
import AdminDashboard from "../pages/AdminDashbaord";
import UserDashboard from "../pages/uaserdashboard";
import ProtectedRoute from  "./ProtectRoutes";
const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<SignupPage />} /> */}
            <Route path="/login" element={<LoginPage />} />
            <Route
                path="/admindashboard"
                element={
                    <ProtectedRoute>
                        <AdminDashboard />
                    </ProtectedRoute>
                }
            />
            <Route path="/userdashboard" element={<ProtectedRoute>< UserDashboard /></ProtectedRoute>} />
            {/* <Route path="/home" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} /> */}
        </Routes>
    );
};

export default AppRoutes;