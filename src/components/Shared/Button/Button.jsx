// Button.js
import React from "react";
import styles from "./Button.module.css";

const Button = ({ text }) => {
  return (
    <div className={styles.submitButton}>
      <button className={styles.roundbutton}>{text}</button>
    </div>
  );
};

export default Button;
