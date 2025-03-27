import React, { useState } from "react";
import BeautyLogo  from "../assets/beautylogo.jpg"
import { useAuth } from "../context/AuthContext"; 

const AdminNavbar = () =>{
  const { logout } = useAuth();
 

  return (

     <div>
      <nav className="bg-[var(--color-white)] p-4 w-full fixed top-0 left-0 shadow-md flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img src={BeautyLogo} alt="Logo" className="h-10 w-10" /> {/* Replace with your logo */}
        <h1 className="text-xl font-semibold text-[var(--color-softPink)]">Beauty Admin</h1>
      </div>
        <button onClick={logout} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">Logout</button>
      </nav>
     </div>

  );
};
export default AdminNavbar;