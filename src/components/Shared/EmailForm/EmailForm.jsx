import React from "react";
import styles from "./EmailForm.module.css";
import Button from "../Button/Button";

const EmailForm = () => {
  return (
    <div className={styles.form}>
      <form className={styles.emailForm}>
        <h3>LASCA LA TUA MAE PER RECERVE UN CONCHE SCONTO</h3>
        <div className="inputGroup">
          <input type="text" placeholder="NOME" />
          <input type="email" placeholder="EMAIL" />
        </div>
        <Button text="OTTENTI" />
      </form>
    </div>
  );
};

export default EmailForm;
