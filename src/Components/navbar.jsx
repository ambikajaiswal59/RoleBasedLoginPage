import React, { useState, useEffect } from "react";
import BeautyLogo from "../assets/beautylogo.jpg";
import { useAuth } from "../context/AuthContext";
import { ChevronDown, LayoutDashboard } from "lucide-react";

const AdminNavbar = () => {
  const { logout } = useAuth();
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleClick = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown-button")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <nav className="bg-[var(--color-white)] p-4 w-full fixed top-0 left-0 shadow-md flex justify-between items-center z-50">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <img src={BeautyLogo} alt="Logo" className="h-10 w-10" />
          <h1 className="text-xl font-semibold text-[var(--color-softPink)]">Beauty Admin</h1>
        </div>

        <div className="flex gap-5">
          {/* Dashboard Button */}
          <div className="group relative bg-white h-10 w-36 px-4 py-2 shadow-md rounded-lg flex items-center justify-center gap-2 border border-pink-400 hover:bg-pink-50 cursor-pointer">
            <LayoutDashboard className="h-5 w-5 text-black group-hover:text-pink-600" />
            <label className="text-black group-hover:text-pink-600">Dashboard</label>
          </div>

          {/* Reusable Button Component */}
          {["products", "orders", "customer"].map((menu) => (
            <div
              key={menu}
              className={`dropdown-button group relative bg-white h-10 w-36 px-4 py-2 shadow-md rounded-lg flex items-center justify-center gap-2 border border-pink-400 hover:bg-pink-50 cursor-pointer ${openDropdown === menu ? "bg-pink-50" : ""
                }`}
              onClick={() => handleClick(menu)}
            >
              <label className="text-black group-hover:text-pink-600 capitalize">{menu}</label>
              <ChevronDown className="h-5 w-5 text-black group-hover:text-pink-600" />
              {openDropdown === menu && (
                <div className="absolute top-12 left-0 bg-white shadow-md rounded-lg p-2 w-40">
                  {menu === "products" && (
                    <>
                      <p className="p-1 hover:bg-pink-100 rounded">View All Products</p>
                      <p className="p-1 hover:bg-pink-100 rounded">Add New Product</p>
                      <p className="p-1 hover:bg-pink-100 rounded">Categories</p>
                      <p className="p-1 hover:bg-pink-100 rounded">Manage Inventory</p>
                      <p className="p-1 hover:bg-pink-100 rounded">Product Reviews</p>
                    </>
                  )}
                  {menu === "orders" && (
                    <>
                      <p className="p-1 hover:bg-pink-100 rounded">All Orders</p>
                      <p className="p-1 hover:bg-pink-100 rounded">Pending Orders</p>
                      <p className="p-1 hover:bg-pink-100 rounded">Completed Orders</p>
                      <p className="p-1 hover:bg-pink-100 rounded">Cancelled Orders</p>
                      <p className="p-1 hover:bg-pink-100 rounded">Returns/Refunds</p>
                    </>
                  )}
                  {menu === "customer" && (
                    <>
                      <p className="p-1 hover:bg-pink-100 rounded">Customer List</p>
                      <p className="p-1 hover:bg-pink-100 rounded">Add New Customer</p>
                      <p className="p-1 hover:bg-pink-100 rounded">Customer Feedback</p>
                      <p className="p-1 hover:bg-pink-100 rounded">Loyalty Program</p>
                      <p className="p-1 hover:bg-pink-100 rounded">Support Requests</p>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>


        {/* Logout Button */}
        <button
          onClick={logout}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default AdminNavbar;
