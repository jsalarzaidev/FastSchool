// src/components/Footer/index.jsx
import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Social Links */}
      <div className={styles.socialLinks}>
        {/* Icons would be added here */}
        Social Media Icons
      </div>

      {/* Additional Footer Information */}
      <div className={styles.info}>
        © 2023 FastSchool. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
