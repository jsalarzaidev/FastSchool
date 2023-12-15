import React from "react";
import styles from "./dashboard.module.css";
import Profile from "../shared/profile/Profile";
import AiLink from "../shared/AiLink/AiLink";

function Dashboard() {
  return (
    <div className={styles.main}>
      <Profile />
      <AiLink />
    </div>
  );
}

export default Dashboard;
