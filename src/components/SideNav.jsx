import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SideNav.module.scss";
import { clsx } from "clsx";
import { useEffect } from "react";

export const SideNav = () => {
  const [activeItem, setActiveItem] = useState(-1);

  useEffect(() => {
    console.log(activeItem);
  }, [activeItem]);

  return (
    <nav className={styles.nav}>
      <div
        className={clsx(
          styles.navItems,
          activeItem === 0 && styles.activeItem0,
          activeItem === 1 && styles.activeItem1,
          activeItem === 2 && styles.activeItem2,
          activeItem === 3 && styles.activeItem3
        )}
      >
        <Link
          className={styles.navItem}
          to={"/"}
          onMouseOver={() => setActiveItem(0)}
        >
          Home
        </Link>
        <Link
          className={styles.navItem}
          to="/projects"
          onMouseOver={() => setActiveItem(1)}
        >
          Projects
        </Link>
        <Link
          className={styles.navItem}
          to="/blog"
          onMouseOver={() => setActiveItem(2)}
        >
          Blog
        </Link>
        <Link
          className={styles.navItem}
          to="/resume"
          onMouseOver={() => setActiveItem(3)}
        >
          Resume
        </Link>
      </div>
      <div className={styles.menuBackground}></div>
    </nav>
  );
};
