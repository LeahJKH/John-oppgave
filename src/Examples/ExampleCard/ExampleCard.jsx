import React from "react";
import PropTypes from "prop-types";
import Style from "./ExampleCard.module.css";

/* Når man lager en react component i et bibliotek flere skal ha tilgang til, kan det være lurt å lage en så beskrivende blokk kommentar som mulig.
Nedenfor er et eksempel på en enkel blokk kommentar, hvis du hovrer musepekeren over ExampleCard funksjonen, så vil denne blokk kommentaren komme opp,
og brukeren vil kunne lese veldig tydlig hva alle parameterene er for noe. 

Blokk kommentarene blir og brukt av storybook sin autodocs feature. Autodocs kan du lese mer om i ExampleCard.stories.jsx*/

/**
 * Her lager vi et enkelt eksempelkort som har en tittel, en liten liste med tekst. et eller flere children element og en style theme.
 * @param
 * title: Dette er en string som beskriver "tittelen" på kortet,
 *
 * @param
 * listItems: Dette er et array med strings som blir plasert i et ul element.
 *
 * @param
 * children: Dette er alle "children" elementente til ExampleCard.
 *
 * @param
 * theme: Dette er det globale argumentet "theme" som man finner i .storybook/preview.js. I dette kortet kan det kun aksepteres som "light",
 * som er "standard" argumentet, eller "dark". se under "proptypes" i ExampleCard.jsx for å finne ut mer.
 *
 * @returns
 * ExampleCard react komponent
 */
export const ExampleCard = ({ title, listItems, children, theme }) => {
  /* Her skjekker vi theme og bestemmer lightmode eller darkmode. */
  let themeClass = "";
  if (theme === "light") {
    themeClass = "lightMode";
  } else {
    themeClass = "darkMode";
  }

  return (
    /* Her er en måte å sette flere classNames hvis du må bruke flere variabler. */
    <article className={[Style.article, Style[themeClass]].join(" ")}>
      <h2>{title}</h2>
      <ul>
        {/* Her looper vi igjennom "listItems" arrayet, og lager en <li> component for hver av de. */}
        {listItems.map((listItem) => {
          return <li>{listItem}</li>;
        })}
      </ul>
      {/* Her er hvor resten av "children" componentsene legges, om vi har noen. */}
      {children}
    </article>
  );
};

/* Det kan være lurt å bruke PropTypes slik at andre kan lett skjønne hva de forskjellige "props" som funksjonen tar inn er.
Dette er som en forenklet utgave at TypeScript. */
ExampleCard.propTypes = {
  title: PropTypes.string,
  listItems: PropTypes.arrayOf(PropTypes.string),
  /* Siden jeg ikke er sikker på hva Children kommer til å være, så setter jeg bare proptypes any her for nå. 
  etterhvert som vi vet hva som er naturlig å putte inn i dette kortet, kan children spesifiseres mer. */
  children: PropTypes.any,
  /* theme er en global variabel som alltid vil være enten "light" eller "dark". */
  theme: PropTypes.oneOf(["light", "dark"]),
};
