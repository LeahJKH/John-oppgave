import React from "react";
import "./Card.css";
export function TestCard({ img, title, children }) {
  return (
    <article>
      <img src={img.src} alt={img.alt} />
      <h2>{title}</h2>
      {children}
    </article>
  );
}
