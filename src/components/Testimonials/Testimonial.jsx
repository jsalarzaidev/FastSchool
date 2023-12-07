// Testimonials.js
import React from "react";
import TestimonialCard from "./../Shared/TestimonialCard/TestimonialCard";
import styles from "./Testimonial.module.css";

const testimonials = [
  // Assuming you have an array of testimonial data
  // Replace with actual data and image URLs
  { name: "Paolo Rossi", text: "...", imageUrl: "path/to/image.jpg" },
  { name: "Alessandra Leone", text: "...", imageUrl: "path/to/image.jpg" },
  { name: "Paola Vecchi", text: "...", imageUrl: "path/to/image.jpg" },
];

const Testimonials = () => {
  return (
    <div className={styles.testimonialsContainer}>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );
};

export default Testimonials;
