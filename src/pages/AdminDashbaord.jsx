import React, { useState } from "react";
import Navbar from "../Components/navbar";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-softPink to-peach font-poppins">
      <Navbar />
      <div className="p-6"> {/* Dashboard content here */}
        <h1>Hi ambika </h1>
         </div>
    </div>
  );
};

export default AdminDashboard;