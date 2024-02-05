Hvordan lage et nytt component:

             1. Lag en ny folder inni src/stories med samme navn som komponenten du vil lage. Hvis du vil lage en button kan den hete DITT_KODEHODENAVN_Button.

             2. Inni denne folderen lager du en index.js fil, og en komponentfil som heter det samme som mappen, f.eks DITT_KODEHODENAVN_Button.jsx,
             en css fil med samme navn, f.eks DITT_KODEHODENAVN_Button.module.css, og en DITT_KODEHODENAVN_Button.stories.js(x) fil.
             3. inni index.js filen skal du kun exportere komponenten, i eksempelet over vil det se se ut som; export * from "./DITT_KODEHODENAVN_Button"

             4. Lag react komponenten i jsx filen som du vil. Husk å importere React i toppen av filen via import React from "react";
             Husk også å importere css, i eksempelet over ville det sett sånn ut;


            ```javascript
             import Style from "./DITT_KODEHODENAVN_Button.module.css";
            ```

             IKKE bruk export default, bruk bare export. Eksempel;

             ```javascript
             export const MinReactComponent=()=>{return(<p>Hei</p>)}
             ```


             For at storybook skal bli fornøyd må vi desverre bruke proptypes. Det vil si man må definere hvilke "type" proppertiene man bruker i funksjonen er. dvs er propertien du ligger inn i componenten hvis du har noen, en string eller et tall osv osv. Det gjør man ved å først importere proptypes i starten av filen via:

             ```javascript
             import PropTypes from "prop-types"
             ```

             så etter funksjonen definerer man proptypes til funksjonen via:

            ```javascript
             MinReactComponent.PropTypes = {
               prop1: PropType.string,
               prop2: PropType.number,
               prop3: PropType.array
             }
            ```

             5. I index.jsx i root folderen til prosjektet adder du samme linje som er lagt inn i din index.js fil.
             I eksempelet over vil det være;

            ```javascript
             export * from "./DITT_KODEHODENAVN_Button"
            ```

             6. Siden må vi inn i .stories.js filen.
             Her importerer vi først selve JSX componenten i toppen av filen, f.eks;

            ```javascript
             import {MyReactComponent} from "./DITT_KODEHODENAVN_Button"
            ```

             Så må du definere en export default hefra. der definerer du bl.a. hva tittel componenten skal ha i StoryBook, hvilken component denne defaulten gjelder for, og hvordan den skal rendres.

             Eksempel:

             ```javascript
             export default {
               /* StoryBook lager en folderstruktur dynamisk basert på tittelen til alle components,
               så alle components som har "Components/..." i tittelen havner i en mappe som heter Components på storybook appen. */
               title: "Components/MyReactComponent",
               component: MyReactComponent,
               parameters: {
                  /*Her viser du hvordan komponenten skal rendres i forhold til kanten av "canvas" elementet i storybook. */
                  layout: "centered"
               },
               /* taggen her bestemmer hvordan du vil lage "documentasjonen" for komponentet, autodocs gjør det automatisk.
               Den bruker bl.a. blokk kommentaren til react komponenten din. Så da er det viktig å lage en god og utfyllende blokk kommentar. */
               tags: ["autodocs"]
             }
             ```

             Så må du definere en "story". DVS en versjon av komponenten du vil vise. Hvis du har et statisk element som ikke har noe parameter,
             kan du lage en statisk story ved å skrive:


             ```javascript
             export const StaticStory = {}
             ```


             men hvis funksjonen din tar i bruk parametere, definerer du en "story" med fastsatte parametere her.

             ```javascript
             export const StoryOne = {
               /* her lager du et args object med alle parameterene til react komponenten din.*/
               args: {
                  prop1: "Hei hei!",
                  prop2: 42,
                  prop3: ["apple","pear","orange",]
               }
             }
             ```

             Så passer du på å være i rootfolderen til librariet i terminalen og skriver;

             npm run storybook

             Da skal browseren åpne storybook applikasjonen, og du skal kunne se komponenten din i sidebar.

             Se gjerne på eksempelfilene som er lagt inn for å se mer spesifikt hvordan dette kan skrives.