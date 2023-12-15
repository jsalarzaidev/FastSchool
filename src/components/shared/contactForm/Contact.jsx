import React, { useState } from "react";
import styles from "./Contact.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    console.log(name, email, message);
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="NOME"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="inputGroup">
        <input
          type="email"
          placeholder="EMAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="inputGroup">
        <textarea
          placeholder="MESSAGGIO"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button className={styles.submit} type="submit">
        INVIA
      </button>
    </form>
  );
};

export default ContactForm;
