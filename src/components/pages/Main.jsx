import React from "react";
import Call from "../callAction/Call";
import Hero from "../hero/Hero";
import What from "../whatItDoes/what";
import Use from "../howtoUse/Use";
import Testimonials from "../testimonials/Testimonial";
import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <Hero />
      <Use />
      {/* <What /> */}
      <Testimonials />
      <Call />
    </main>
  );
}

export default Main;
