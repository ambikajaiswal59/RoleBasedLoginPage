import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/approutes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <Router> {/* ✅ Router must wrap AuthProvider */}
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;