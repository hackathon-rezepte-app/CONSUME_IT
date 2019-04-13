import React from "react";
import { withRouter } from "react-router";

function Detail({ recipes, match, history }) {
  const recipe = recipes[match.params.index];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="one-half column" style={{ marginTop: "25%" }}>
            <h4>{recipe.name}</h4>
            <h5>
              <small>mhhhhm ... delicious</small>
            </h5>

            <img src={recipe.image} width="100%" height="auto" />

            <h5>ingredigents:</h5>
            <ul>
              {recipe.needs.map(ingredient => (
                <li className="ingredigents-list not-available">
                  {ingredient}
                </li>
              ))}
              {recipe.uses.map(ingredient => (
                <li className="ingredigents-list">{ingredient}</li>
              ))}
            </ul>

            <h5>how to magic:</h5>
            <p>{recipe.preparation}</p>

            <label
              htmlFor="button-door"
              className="button-door-label button-label-screen3"
            />
            <input
              id="button-door"
              type="submit"
              className="button-door"
              onClick={() => history.push("/recipes")}
            />
          </div>
        </div>
      </div>

      <div className="footer">
        <p>
          made with{" "}
          <img
            src="images/icon_heart.svg"
            className=""
            height="15px"
            width="15px"
          />{" "}
          in dresden
        </p>
      </div>
    </>
  );
}

export default withRouter(Detail);
