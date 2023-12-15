import React from "react";
import styles from "./Profile.module.css";

function Profile() {
  return (
    <section className={styles.profile}>
      <img src="/fs_white.svg" alt="FastSchool Logo" />
      <ul className={styles.profileList}>
        <li>My Lesson</li>
        <li>Profile</li>
      </ul>
    </section>
  );
}

export default Profile;
