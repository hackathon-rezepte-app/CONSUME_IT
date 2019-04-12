import React, { useState } from "react";

function Start({ queryItems }) {
  const [picture, setPicture] = useState(null);
  return (
    <div>
      <input
        className="file-input"
        type="file"
        accept="image/*"
        onChange={event => setPicture(event.target.files[0])}
      />
      <button onClick={() => queryItems(picture)} />
    </div>
  );
}

export default Start;
