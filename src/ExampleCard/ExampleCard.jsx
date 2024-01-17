import React from "react";
import Style from "./ExampleCard.module.css";

//!! SELV OM DU EXPORTERER I index.js ER DET VIKTIG AT DU FREMDELES BRUKER EXPORT HER !!
export function ExampleCard({ img, title, children }) {
  return (
    /* Vi bruker css modules for å passe på at classenavnene er unike. */
    <article className={Style.card}>
      <img className={Style.cardImage} src={img.src} alt={img.alt} />
      <h2>{title}</h2>
      {children}
    </article>
  );
}
