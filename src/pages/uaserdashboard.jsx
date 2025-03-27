import React from "react";
import { useAuth } from "../context/AuthContext";

const UserDashboard = () =>{
  const {logout}=useAuth();
  return (

     <div className="min-h-screen bg-gradient-to-br from-green-100 to yellow-200 p-6">
      <nav className="bg-white p-4 w-full fixed top-0 left-0 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Hi ! User</h1>
        <button onClick={logout} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">Logout</button>
      </nav>
     </div>

  );
};
export default UserDashboard;