// Use.js
import React from "react";
import Video from "../Shared/VideoExample/Video";
import TextExplanation from "../Shared/TextExplanation/TextExplanation";
import styles from "./use.module.css";

const Use = () => {
  const videoId = "YOUR_YOUTUBE_VIDEO_ID"; // Replace with actual YouTube video ID

  return (
    <div className={styles.use_container}>
      <TextExplanation />
      <Video videoId={videoId} />
    </div>
  );
};

export default Use;
