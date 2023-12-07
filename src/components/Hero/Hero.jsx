// src/components/LeadBanner/index.jsx
import React from "react";
import AppExplanation from "../Shared/AppExplanation/AppExplanation";
import Button from "../Shared/Button/Button";
import EmailForm from "../Shared/EmailForm/EmailForm";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <AppExplanation />
      <EmailForm />
      <Button text="OTIENTI" />
    </section>
  );
};

export default Hero;
