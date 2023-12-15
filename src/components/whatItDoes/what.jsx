import React from "react";
import Video from "../shared/videoExample/Video";
import TextExplanation from "../shared/textExplanation/TextExplanation";
import styles from "./what.module.css";

const What = () => {
  const videoId = "5YJ7GfOUPDE?si=wqaKQu6P-t4R2jY2&amp;controls=0";
  return (
    <section className={styles.what_container}>
      <TextExplanation />
      <Video videoId={videoId} />
    </section>
  );
};

export default What;

// title="Cosa fa FastSchool" desc="CAI SI IMMEDESIMA IN UN DOCENTE
// IN POCHI SECONDI AVRETE A VOSTRA DISPOSIZIONE UN
// ELABORATO CHE RIGUARDA L'ARGOMENTO DA VOI SCELTO,
// UNA SERIE DE QUZ SUDDIVIS IN CATEGORI, UN OUTLINE PER
// SEMPLIFICARE LO STUDIO E DIVERSI CONSIGLI PER CREARE
// FANTASTICHE ATTIVITÀ DIDATTICHE
