// Use.js
import React from "react";
import TextExplanation from "../Shared/TextExplanation/TextExplanation";
import Video from "../Shared/VideoExample/Video";
import styles from "./use.module.css";

const What = () => {
  const videoId = "YOUR_YOUTUBE_VIDEO_ID"; // Replace with actual YouTube video ID

  return (
    <div className={styles.use_container}>
      <Video videoId={videoId} />
      <TextExplanation />
    </div>
  );
};

export default What;
