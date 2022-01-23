import React from "react";
import "./App.css";
import Home from "./components/Pages/Home";
import Navigation from "./components/Navbar/Navigation";
import { Container } from "react-bootstrap";
import About from "./components/Pages/About";
import Resume from "./components/Pages/Resume";
import Footer from "./components/Pages/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <Home />
        <About />
        <Resume />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
