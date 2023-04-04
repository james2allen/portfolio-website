import React from "react";
import { Link } from "react-router-dom";
import styles from "./SideNav.module.scss";

export const SideNav = () => {
  return (
    <nav>
      <div className={styles.nav}>
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
