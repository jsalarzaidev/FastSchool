import React from "react";
import AppExplanation from "../shared/appExplanation/AppExplanation";
import EmailForm from "../shared/emailForm/EmailForm";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <AppExplanation />
      <EmailForm />
    </section>
  );
};

export default Hero;
