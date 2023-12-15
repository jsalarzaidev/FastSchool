import React, { useState, useEffect } from "react";
import styles from "./ResultApi.module.css";

const ResultApi = ({ apiUrl }) => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    if (apiUrl) {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setApiData(data))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [apiUrl]);

  return (
    <div>
      {apiData ? (
        <div>{/* Render your API data here */}</div>
      ) : (
        <p>No data to display. Please enter a URL.</p>
      )}
    </div>
  );
};

export default ResultApi;
