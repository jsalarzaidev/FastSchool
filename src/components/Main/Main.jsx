import React from "react";
import Call from "../CallAction/Call";
import Hero from "../Hero/Hero";
import What from "../WhatItDoes/what";
import Use from "../HowtoUse/Use";
import Testimonials from "../Testimonials/Testimonial";
import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <Hero />
      <Use />
      <What />
      <Testimonials />
      <Call />
    </main>
  );
}

export default Main;
