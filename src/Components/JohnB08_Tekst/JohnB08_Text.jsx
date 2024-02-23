import React from "react";
import PropTypes from "prop-types"
import Style from "./JohnB08_Text.module.css"

/**
 * dette er en react component som tar in en tekst og styler den basert på min styling
 * @param {*} string
 * @returns react component
 */
export const JohnB08Text = ({text})=>{
    return(
        <p className={Style.text}>{text}</p>
    )
}  
JohnB08Text.PropTypes = {
    text: PropTypes.string
}