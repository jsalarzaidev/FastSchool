import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/pages/Main";
import Footer from "./components/footer/Footer";
import Dashboard from "./components/pages/Dashboard";
import "./App.css";

function App() {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  return (
    <div className="app-background">
      <div className={isDashboard ? "App dashboard" : "App"}>
        {!isDashboard && <Header />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Add more routes as needed */}
        </Routes>
        {!isDashboard && <Footer />}
      </div>
    </div>
  );
}

export default App;
