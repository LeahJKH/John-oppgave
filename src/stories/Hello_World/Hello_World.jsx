import React from "react";
import Style from "./Hello_World.module.css";
import PropTypes from "prop-types";

export const HelloWorld = ({ primary }) => {
  const mode = primary ? "Hello World!" : "Goodnight World!";
  /* Vi bruker klassenavn for å passe på at klassenavnene er unike */
  return <p className={Style.helloWorld}>{mode}</p>;
};

HelloWorld.PropTypes = {
  primary: PropTypes.bool,
};
