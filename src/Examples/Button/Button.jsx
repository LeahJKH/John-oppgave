import React from "react";
import PropTypes from "prop-types";
import "./button.css";

/**
 * Primary button component for library
 * @param {{theme, size, label}} args: theme = light | dark, size = small | medium | large
 * @returns 
 */
export const Button = ({ theme, size, label, ...props }) => {
  let mode = "";
  theme === "light"
    ? (mode = "storybook-button--primary")
    : (mode = "storybook-button--secondary");
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  theme: PropTypes.oneOf(["light", "dark"]),
  /**
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  size: "medium",
  onClick: undefined,
};
