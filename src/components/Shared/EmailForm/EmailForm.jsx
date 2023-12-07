// EmailForm.js
import React from "react";
import styles from "./EmailForm.module.css";

const EmailForm = () => {
  return (
    <form className={styles.emailForm}>
      <h2>LASCA LA TUA MAE PER RECERVE UN CONCHE SCONTO</h2>
      <div className="inputGroup">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
      </div>
    </form>
  );
};

export default EmailForm;
