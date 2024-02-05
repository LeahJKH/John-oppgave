import { Button } from "../Button";
import { ExampleCard } from "./ExampleCard";

/* Her kommer alle "default" verdiene storybook trenger for å previewe komponenten */
export default {
  /* Dette er hvordan storybook skal organisere komponenten. Hvilken mappe skal den legges i, og hva skal den hete. */
  title: "Examples/ExampleCard",
  /* Her er en referanse til selve react componenten.  */
  component: ExampleCard,
  /* Her kan du legge inn parametere for hvordan componenten skal bli rendret i storybook. */
  parameters: {
    layout: "centered",
  },
  /* Her kan du legge inn forskjellige tags som beskriver kommandoer storybook må gjøre.
  "autodocs" forteller storybook at all dokumentasjon kan lages automatisk. Den gjør dette ved å hente all konteksten den finner fra komponent filen, samt denne.
  Og genererer en automatisk dokumentasjonspresentasjon fra det. Dette gjør det viktig å lage en god Blokk kommentar for react komponenten din. */
  tags: [],
};

/* Her blir alle "stories" storybook trenger laget. Du kan se på de som fastsatte verdier for komponenten.
storybook trenger alltid en "story" for å preview komponenten, man kan lage en static story ved å skrive:

export const StaticStory = {}

Da kan du fremdeles få en preview av komponenten du jobber med selv om den er helt statisk. 
*/
export const LightMode = {
  /* under args skriver du en verdi for alle parameterene komponenten trenger.
    Hvis parameteret har en default value trenger du ikke overskrive det her. */
  args: {
    title: "This is an example of global args.",
    listItems: [
      "Its a very neat way",
      "to show off a general theme",
      "on multiple components at once",
    ],
    //!! Siden children argumentet her inneholder en react component, må filtypen her være en stories.jsx fil og ikke bare en stories.js fil! Det gjelder også hvis det bare står html her.
    children: (
      <Button
        /* Selv om theme er globally assigned, må du fremdeles fortelle knappen som er "child", hva den skal ha.
        React components inni stories har ikke tilgang til de globale valuene. */
        theme={"light"}
        size={"large"}
        label={"Change my label!"}
      ></Button>
    ),
  },
};
export const DarkMode = {
  args: {
    title: "This is an example of global args.",
    listItems: [
      "Its a very neat way",
      "to show off a general theme",
      "on multiple components at once",
    ],
    children: (
      <Button
        theme={"dark"}
        size={"large"}
        label={"Try changing it down in the controls!"}
      ></Button>
    ),
    /* Siden denne "storyen" skal defaulte til "dark" må jeg override theme argumentet her. */
    theme: "dark",
  },
};
