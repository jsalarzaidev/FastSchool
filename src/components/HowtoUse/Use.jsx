import React from "react";
import TextExplanation from "../Shared/TextExplanation/TextExplanation";
import Video from "../Shared/VideoExample/Video";
import styles from "./use.module.css";

const Use = () => {
  const videoId = "5YJ7GfOUPDE?si=wqaKQu6P-t4R2jY2&amp;controls=0";

  return (
    <section className={styles.use_container}>
      <Video videoId={videoId} />
      <TextExplanation />
    </section>
  );
};

export default Use;
