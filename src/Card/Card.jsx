import React from "react";
import "./card.css";

//!! SELV OM DU EXPORTERER I index.js ER DET VIKTIG AT DU FREMDELES BRUKER EXPORT HER !!
export function TestCard({ img, title, children }) {
  return (
    <article>
      <img src={img.src} alt={img.alt} />
      <h2>{title}</h2>
      {children}
    </article>
  );
}
