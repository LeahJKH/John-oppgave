import React from "react";

import Style from "./ExampleButton.module.css";

//!! SELV OM DU EXPORTERER I index.js ER DET VIKTIG AT DU FREMDELES BRUKER EXPORT HER !!

/**
 * En funksjon som lager rette klassenavn hvis du har flere klassenavn i CSS.
 * @param {string[]} classes Et array med klassenavn som blir addet.
 * @returns et array med Style["klassenavn"] som kan finnes igjen i styleSheet
 */
const setClasses = (classes) => {
  return classes.map((className) => {
    Style[className].join(" ");
  });
};

/* ExampleButton har to forskjellige versjoner, her bruker vi kind="primary" for å sette default stylingen til knappen som "primary" 
ref, er hva knappen refererer til, props er eventuelt andre props vi har.*/
export const Button = React.forwardRef(
  ({ kind = "primary", ...props }, ref) => {
    return (
      <button
        className={setClasses(["button", `${kind}`])}
        ref={ref}
        {...props}
      />
    );
  }
);
