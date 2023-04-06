import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import styles from "./App.module.scss";
import { Blog } from "./components/Blog/Blog";
import { Home } from "./components/Home/Home";
import { SideNav } from "./components/SideNav";
import { Projects } from "./components/Projects/Projects";
import { Resume } from "./components/Resume/Resume";
import { ParallaxProvider } from "react-scroll-parallax";
import { TopNav } from "./components/TopNav";

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <div className={styles.layout}>
          <TopNav />
          <div className={styles.homeLayout}>
            <SideNav />
            <Routes className={styles.page}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
