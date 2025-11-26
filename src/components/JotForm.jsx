import React from "react";

export function JotForm() {
  return (
    <div className="new-client-form-container">
      <iframe
        scrolling="no"
        id="JotFormIFrame-250231343961046"
        onLoad="window.parent.scrollTo(0,0)"
        allowtransparency="true"
        src="https://form.jotform.com/250231343961046"
        width="800px"
        height="4800px"
      ></iframe>
    </div>
  );
}

export default JotForm;
