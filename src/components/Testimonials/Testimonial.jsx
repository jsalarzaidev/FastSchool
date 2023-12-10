// Testimonials.js
import React from "react";
import TestimonialCard from "./../Shared/TestimonialCard/TestimonialCard";
import styles from "./Testimonial.module.css";

const testimonials = [
  // Assuming you have an array of testimonial data
  // Replace with actual data and image URLs
  {
    name: "Paolo Rossi",
    text: "APP FANTASTICA SEMPLIFICA LA PROGRAMMAZIONE DELLE LEZIONI FORNENDO CONTENUTI DI QUALITÀ E MI AIUTA AD AVERE SEMPRE NUOVE IDEE MOLTO APPREZZATE DAI MIEI ALUNNI OTTIMO RAPPORTO QUALITA PREZZO",
    imageUrl: "/testimo.png",
  },
  {
    name: "Alessandra Leone",
    text: "FINALMENTE LO STRUMENTO GIUSTO PER OTTIMIZZARE LAVORO DA FARE A CASA DOPO UNA GIORNATA ESTENUANTE IN CLASSE GRAZIE A QUESTA APP RIESCO AD AVERE PIÙ TEMPO LIBERO DA DEDICARE A ME STESSA E AIMEI FIGU OTTIMA DAVVERDI..",
    imageUrl: "/testimo.png",
  },
  {
    name: "Paola Vecchi",
    text: "INIZIALMENTE PENSAVO FOSSE LA SOLITA APP CHE DOPO ALCUNI UTILIZZI BLOCCAVA LA MAGIA ED INVECE. WOW AL COSTO DE 108 POSSO UTILIZZARLA ALL'INFINITO PER TUTTA LA DURATA DELL'ANNO STRUMENTO FANTASTICO CHE STA MIGLIORANDO LA QUALITÀ DELLE ME LEZIONI OLTRE CHE FARM RISPARMIARE TEMPO PREZIOSO",
    imageUrl: "/testimo.png",
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialsContainer}>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </section>
  );
};

export default Testimonials;
