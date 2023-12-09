import React from "react";
import AppExplanation from "../Shared/AppExplanation/AppExplanation";
import EmailForm from "../Shared/EmailForm/EmailForm";
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
