// src/components/Testimonial/index.jsx
import React from "react";
import styles from "./testimonial.module.css";

const Testimonial = ({ author, content }) => {
  return (
    <blockquote className={styles.testimonial}>
      <p>{content}</p>
      <footer>- {author}</footer>
    </blockquote>
  );
};

export default Testimonial;
