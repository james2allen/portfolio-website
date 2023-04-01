import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="h-screen  bg-gradient-to-b from-slate-800 to-slate-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" />
          <Route path="/about" />
          <Route path="/resume" />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
