// Button.js
import React from "react";
import styles from "./Button.module.css";

const Button = ({ text }) => {
  return <button className={styles.roundbutton}>{text}</button>;
};

export default Button;
