import React from "react";
import Style from "./Hello_World.module.css";

export function HelloWorld() {
  /* Vi bruker klassenavn for å passe på at klassenavnene er unike */
  return <p className={Style.helloWorld}>Hello World!</p>;
}
