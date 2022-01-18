import React from "react";
import "./App.css";
import Home from "./components/Pages/Home";
import Navigation from "./components/Navbar/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
