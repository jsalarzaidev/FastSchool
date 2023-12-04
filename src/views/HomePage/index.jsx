// src/views/HomePage/index.jsx
import React from "react";
import LeadBanner from "../../components/LeadBanner";
import Feature from "../../components/Feature";
import Testimonial from "../../components/Testimonial";
import ContactForm from "../../components/ContactForm";
import styles from "./home.module.css";

const HomePage = () => {
  return (
    <main className={styles.homePage}>
      <LeadBanner />
      <section className={styles.features}>{/* <Feature /> */}</section>
      <section className={styles.testimonials}>{/* <Testimonial /> */}</section>
      <section className={styles.contact}>{/* <ContactForm /> */}</section>
    </main>
  );
};

export default HomePage;
