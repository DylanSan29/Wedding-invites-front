import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Register from "./pages/Register";

import ForgotPassword from "./pages/ForgotPassword";
import Layout from "./Layout";

import PublicRoute from "./components/PublicRoute";

import "./i18n";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Layout for Regular Users */}
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route path="login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="home" element={<PublicRoute><Home /></PublicRoute>} />
          <Route path="register" element={<PublicRoute><Register /></PublicRoute>} />
          <Route path="forgot-password" element={<PublicRoute><ForgotPassword /></PublicRoute>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
