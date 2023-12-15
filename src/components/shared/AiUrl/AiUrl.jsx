import React, { useState } from "react";

import styles from "./AiUrl.module.css";
import ResultApi from "../ResultApi/ResultApi";

function AiUrl() {
  const [url, setUrl] = useState("");

  const handleClear = () => setUrl("");
  const handleRun = () => {
    // Logic to handle URL
    console.log("URL:", url);
  };

  return (
    <div className="url-input-section">
      <div className="input-container">
        <input
          type="text"
          placeholder="insert URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleRun}>Run</button>
      </div>
      <ResultApi apiUrl={url} />
    </div>
  );
}

export default AiUrl;
