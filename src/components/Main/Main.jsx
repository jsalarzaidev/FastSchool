import React from "react";
import Call from "../CallAction/Call";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import What from "../HowtoUse/Use";
import Use from "../HowtoUse/Use";
import Testimonials from "../Testimonials/Testimonial";

function Main() {
  return (
    <div className="App">
      <Hero />
      <Use />
      <What />
      <Testimonials />
      <Call />
      <Footer />
    </div>
  );
}

export default Main;
