import React, { useState } from "react";
import Navbar from "../Components/navbar";

const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="p-6"> {/* Dashboard content here */}
        <h1>Hi ambika </h1>
         </div>
    </div>
  );
};

export default AdminDashboard;