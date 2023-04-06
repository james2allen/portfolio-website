import React from "react";
import { Link } from "react-router-dom";
import styles from "./TopNav.module.scss";

export const TopNav = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navFill}></div>
      <div className={styles.navItems}>
        <Link className={styles.navItem} to={"/"}>
          Home
        </Link>
        <Link className={styles.navItem} to="/projects">
          Projects
        </Link>
        <Link className={styles.navItem} to="/blog">
          Blog
        </Link>
        <Link className={styles.navItem} to="/resume">
          Resume
        </Link>
      </div>
    </nav>
  );
};
