import React from "react";
import { withRouter } from "react-router";

function Correct({ items, setItems, queryRecipes, history }) {
  return (
    <div class="container">
      <div class="row">
        <div class="one-half column" style="margin-top: 25%">
          <h4>WE FOUND:</h4>
          <h5>
            <small>please correct, robots are only robots</small>
          </h5>

          <ul>
            {items &&
              items.map(item => (
                <li class="item-list">
                  item.name
                  <div class="item-list-control">
                    <label
                      for="button-ok"
                      class="button-ok-label button-label-screen3"
                    />
                    <input id="button-ok" type="submit" class="button-ok" />

                    <label
                      for="button-no"
                      class="button-no-label button-label-screen3"
                    />
                    <input id="button-no" class="button-no" type="submit" />
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
