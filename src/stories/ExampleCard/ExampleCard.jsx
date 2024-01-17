import React from "react";
import PropTypes from "prop-types";
import Style from "./ExampleCard.module.css";
import image1 from "../assets/Bench-by-lake.jpg";
import image2 from "../assets/Tree-over-lake.jpg";

//!! SELV OM DU EXPORTERER I index.js ER DET VIKTIG AT DU FREMDELES BRUKER EXPORT HER !!
export const ExampleCard = ({ img, title, children }) => {
  return (
    /* Vi bruker css modules for å passe på at classenavnene er unike. */
    <article className={Style.card}>
      <img
        className={Style.cardImage}
        src={img.src ? image1 : image2}
        alt={img.alt}
      />
      <h2>{title}</h2>
      {children}
    </article>
  );
};
ExampleCard.PropTypes = {
  img: PropTypes.any,
  title: PropTypes.string,
  children: PropTypes.any,
};
