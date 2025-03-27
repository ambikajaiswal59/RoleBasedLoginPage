import React from "react";

const AdminDashboard = () =>{
  return (

     <div className="min-h-screen bg-gradient-to-br from-green-100 to yellow-200 p-6">
      <nav className="bg-white p-4 w-full fixed top-0 left-0 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Hi ! Ambika</h1>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Logout</button>
      </nav>
     </div>

  );
};
export default AdminDashboard;