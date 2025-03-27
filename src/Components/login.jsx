import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Swal from "sweetalert2";

const LoginPage = () => {
  const [agencyName, setAgencyName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // ✅ Fixed state

  const handleLogin = () => {
    const users = [
      { username: "admin", password: "admin@123", role: "admin" },
      { username: "public", password: "1234", role: "users" },
    ];

    const foundUser = users.find(
      (user) => user.username === agencyName && user.password === password
    );

    if (foundUser) {
      Swal.fire({
        title: "✅ Success!",
        text: "You have successfully logged in!",
        icon: "success",
        confirmButtonText: "OK",
        allowOutsideClick: false,
      }).then(() => {
        window.location.href = foundUser.role === "admin" ? "/admin" : "/home";
      });
    } else {
      setError("❌ Invalid Username or Password!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 relative overflow-hidden">
      
      {/* Background Blur Circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-white opacity-20 blur-3xl rounded-full"></div>

      {/* Login Card */}
      <div className="relative w-full max-w-md p-8 bg-[#8b80c9] backdrop-blur-lg shadow-lg rounded-xl border border-white/30">
        <h2 className="text-2xl font-bold text-center text-white mb-4">Welcome Back!</h2>
        <p className="text-gray-200 text-center mb-6">Enter your details to access your account</p>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block text-sm font-semibold text-white mb-2">Login Name*</label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg bg-white/50 text-gray-800 placeholder-gray-600 focus:ring-2 focus:ring-blue-300"
            placeholder="Enter your Login Name"
            value={agencyName}
            onChange={(e) => setAgencyName(e.target.value)}
          />
        </div>

        {/* Password Input with Toggle Button */}
        <div className="mb-4 relative">
          <label className="block text-sm font-semibold text-white mb-2">Password*</label>
          <input
            type={showPassword ? "text" : "password"} // ✅ Fixed show/hide password
            className="w-full p-3 border rounded-lg bg-white/50 text-gray-800 placeholder-gray-600 focus:ring-2 focus:ring-blue-300"
            placeholder="min 8-digit password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          {/* Password Eye Toggle Button */}
          <button
            type="button"
            className="absolute top-11 right-3 text-gray-500 focus:outline-none"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <p className="text-xs text-gray-200 mb-4">
          This information will be securely saved as per the
          <a href="#" className="text-blue-300"> Terms of Service</a> &
          <a href="#" className="text-blue-300"> Privacy Policy</a>
        </p>

        <div className="flex justify-between">
          <button className="px-4 py-2 border rounded-lg text-white bg-white/20 hover:bg-white/30 transition duration-300">
            SignUp?
          </button>
          <button
            onClick={handleLogin}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-800 transition duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
