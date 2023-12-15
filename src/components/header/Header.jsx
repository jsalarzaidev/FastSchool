// src/components/Header/index.jsx
import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/fs_white.svg" alt="FastSchool Logo" />
      {/* <div className={styles.logo}>FastSchool</div> */}

      {/* Navigation Menu */}
      <nav>
        <ul className={styles.navList}>
          <li>LOGIN</li>
          <li>LA TUA LEZIONE</li>
          <li>CONTATTACI</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
