import React from "react";

import "./button.css";


//!! SELV OM DU EXPORTERER I index.js ER DET VIKTIG AT DU FREMDELES BRUKER EXPORT HER !!
export const Button = React.forwardRef(
  ({ kind = "primary", ...props }, ref) => {
    return <button data-button={`kind:${kind}`} ref={ref} {...props} />;
  }
);
