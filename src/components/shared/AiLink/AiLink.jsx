import React from "react";
import styles from "./AiLink.module.css";
import AiText from "../AiText/AiText";
import AiUrl from "../AiUrl/AiUrl";

function AiLink() {
  return (
    <section className={styles.ailink}>
      <AiText />
      <AiUrl />
    </section>
  );
}

export default AiLink;
