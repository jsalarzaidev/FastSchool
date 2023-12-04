// src/components/LeadBanner/index.jsx
import React from "react";
import styles from "./leadBanner.module.css";

const LeadBanner = () => {
  return (
    <section className={styles.leadBanner}>
      <h1>Simplify school with a click</h1>
      <p>
        Speed up teaching activities and make learning more accessible and
        interesting with Artificial Intelligence.
      </p>
      {/* Lead form will be another component */}
    </section>
  );
};

export default LeadBanner;
