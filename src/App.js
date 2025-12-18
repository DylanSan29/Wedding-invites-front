import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InviteList from "./pages/InviteList/InviteList";
import PersonalInvitation from "./pages/PersonalInvitation/PersonalInvitation";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import PublicRoute from "./components/PublicRoute";

import "./i18n";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/inviteList"
          element={
            <PublicRoute>
              <InviteList />
            </PublicRoute>
          }
        />

        <Route
          path="/personalInvitation"
          element={
            <PublicRoute>
              <PersonalInvitation />
            </PublicRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        <Route
          path="/forgot-password"
          element={
            <PublicRoute>
              <ForgotPassword />
            </PublicRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
