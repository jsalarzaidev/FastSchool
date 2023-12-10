import React from "react";
import ContactForm from "../Shared/ContactForm/Contact";
import SocialLinks from "../Shared/SocialLinks/SocialLinks";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ContactForm />
      <SocialLinks />
      <p>Copyrights &copy; 2016</p>
    </footer>
  );
};

export default Footer;
