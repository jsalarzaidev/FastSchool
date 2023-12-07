// TestimonialCard.js
import React from "react";
import styles from "./TestimonialCard.module.css";

const TestimonialCard = ({ name, text, imageUrl }) => {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <h3>{name}</h3>
      <p>{text}</p>
    </div>
  );
};

export default TestimonialCard;
