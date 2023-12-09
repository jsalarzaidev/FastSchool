import React from "react";
import Video from "../Shared/VideoExample/Video";
import TextExplanation from "../Shared/TextExplanation/TextExplanation";
import styles from "./what.module.css";

const What = () => {
  const videoId = "5YJ7GfOUPD";
  return (
    <section className={styles.what_container}>
      <TextExplanation />
      <Video videoId={videoId} />
    </section>
  );
};

export default What;
