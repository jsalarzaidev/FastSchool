import React from "react";
import Button from "../Shared/Button/Button";
import styles from "./call.module.css";

const Call = () => {
  return (
    <div className={styles.text_explanation}>
      <img src="/fs_white.svg" alt="FastSchool Logo" />
      <h3>COSA ASPETTI? ENTRA A FAR PARTE DELLA FAMIGLIA FASTSCHOOL!</h3>
      <Button text="ABONATTI" />
    </div>
  );
};

export default Call;
