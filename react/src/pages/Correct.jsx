import React from "react";
import { withRouter } from "react-router";

function Correct({ items, setItems, queryRecipes, history }) {
  return (
    <div>
      Erkannte Lebensmittel:
      <ul>{items && items.map(item => <ul>{item.name}</ul>)}</ul>
      <button
        onClick={() => {
          history.push("/recipes");
          queryRecipes(items);
        }}
      >
        Weiter
      </button>
    </div>
  );
}

export default withRouter(Correct);
