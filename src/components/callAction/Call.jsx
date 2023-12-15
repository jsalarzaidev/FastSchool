import React from "react";
import Button from "../shared/button/Button";
import styles from "./call.module.css";

const Call = () => {
  return (
    <section className={styles.call}>
      <img src="/fs_white.svg" alt="FastSchool Logo" />
      <p>
        COSA ASPETTI?
        <br />
        ENTRA A FAR PARTE DELLA FAMIGLIA FASTSCHOOL!
      </p>
      <Button text="ABBONATTI" />
    </section>
  );
};

export default Call;
