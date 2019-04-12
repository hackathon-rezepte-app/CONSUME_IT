import React, { useState } from "react";
import { withRouter } from "react-router";

function Start({ queryItems, history }) {
  const [picture, setPicture] = useState(null);
  return (
    <div>
      Start
      <input
        className="file-input"
        type="file"
        accept="image/*"
        onChange={event => setPicture(event.target.files[0])}
      />
      <button
        onClick={() => {
          history.push("/correct");
          queryItems(picture);
        }}
      >
        Weiter
      </button>
    </div>
  );
}

export default withRouter(Start);
