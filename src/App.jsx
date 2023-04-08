import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Blog } from "./components/Blog/Blog";
import { Home } from "./components/Home/Home";
import { Projects } from "./components/Projects/Projects";
import { TopNav } from "./components/TopNav";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-sky-100">
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
