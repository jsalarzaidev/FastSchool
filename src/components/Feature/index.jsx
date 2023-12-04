// src/components/Feature/index.jsx
import React from "react";
import styles from "./feature.module.css";

const Feature = ({ title, description }) => {
  return (
    <div className={styles.feature}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
