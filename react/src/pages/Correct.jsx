import React from "react";
import { withRouter } from "react-router";

function Correct({ items, setItems, queryRecipes, history }) {
  return (
    <div className="container">
      <div className="row">
        <div className="one-half column" style={{ marginTop: "25%" }}>
          <h4>WE FOUND:</h4>
          <h5>
            <small>please correct, robots are only robots</small>
          </h5>

          <ul>
            {items &&
              items.map(item => (
                <li className="item-list">
                  {item.name}
                  <div className="item-list-control">
                    <label
                      htmlFor="button-ok"
                      className="button-ok-label button-label-screen3"
                    />
                    <input id="button-ok" type="submit" className="button-ok" />

                    <label
                      htmlFor="button-no"
                      className="button-no-label button-label-screen3"
                    />
                    <input id="button-no" className="button-no" type="submit" />
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
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
