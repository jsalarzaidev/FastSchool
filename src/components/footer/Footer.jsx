import React from "react";
import ContactForm from "../shared/contactForm/Contact";
import SocialLinks from "../shared/socialLinks/SocialLinks";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ContactForm />
      <SocialLinks />
      <p>Copyrights &copy; 2023</p>
    </footer>
  );
};

export default Footer;
