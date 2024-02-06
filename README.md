# Kodehode Library Template

Dette er et tomt template library for Kodehode, for å teste hvordan NPM package publishing fungerer, samt hvordan komponent libraries er satt opp.

Det er satt opp for å automatisk publishe til et npm namespace når det blir gjort en pullrequest til Main branch.

Det har Storybook implementert som devDependency som gjør utvikling av komponenter lettere og mer oversiktlig.

Det publisher til @johnb08/test-library, men dette kan endres etterhvert som det taes i bruk i package.json.

Jeg har nettopp forket denne repositorien, hva gjør jeg?

            1. I terminal, kjør npm install, dette skal installere alle dependencies denne repoen trenger.

            2. Hvis install kjørte uten problemer, kan du kjøre npm run storybook for å åpne dokumentasjonsprogrammet. Her kan du også se på hvordan de forskjellige componentene skal settes opp, og hvordan man tester de i et dummy prosjekt etter man er fornøyd med arbeidet i storybook.
            .storybook inneholder mange forskjellige guides til hvordan å bruke, builde og publishe librariet.

            3. Når du er fornøyd med komponenten som er laget, gjør en pullrequest til dev branch. Dette gjør ting oversiktlig, og librariet trenger ikke bli publisert på nytt hver gang en liten komponent blir addet, men kan releases som en større pakke.
