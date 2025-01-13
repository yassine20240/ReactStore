import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Composents/Home";
import Navbar from "./Composents/Navbar"; // Correct import for Navbar
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Correct imports from 'react-router-dom'
import Store from "./Composents/Store";
 
 

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
         
        </Routes>
      </Router>

    </div>
  );
}

export default App;
