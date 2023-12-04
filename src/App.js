// src/App.js
import React from "react";
import Header from "./components/Header";
import HomePage from "./views/HomePage";
import Footer from "./components/Footer";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
