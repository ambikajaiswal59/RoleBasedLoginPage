import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // ✅ Added user state
  const navigate = useNavigate();

  const login = (role) => {
    setIsAuthenticated(true);
    setUser({ role }); // ✅ Fix: Defined setUser
    localStorage.setItem("user", JSON.stringify({ role })); // ✅ Session store
    navigate(role === "admin" ? "/admindashboard" : "/userdashboard");
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null); // ✅ Clear user
    localStorage.removeItem("user"); // ✅ Remove session
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

