import React from "react";
import styles from "./NavBar.module.css";
import Switch from "../Switch/Switch";

function NavBar() {
  return (
    <div className={styles.navBar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a>ABOUT</a>
        </li>
        <li className={styles.navItem}>
          <a>PROJECTS</a>
        </li>
        <li className={styles.navItem}>
          <a>CONTACT</a>
        </li>
        <li className={styles.navItem}>
          <Switch />
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
