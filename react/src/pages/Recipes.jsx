import React from "react";
import { withRouter } from "react-router";
import { ClipLoader } from "react-spinners";

function Recipes({ recipes, history }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="one-half column" style={{ marginTop: "25%" }}>
            <h4>MAYBE YOU COOK:</h4>

            {!recipes && (
              <ClipLoader
                css={{ marginTop: "40px" }}
                sizeUnit={"px"}
                size={50}
                color={"#7AC6B8"}
                loading={true}
              />
            )}

            {recipes && (
              <>
                <h5>
                  <small>have a nice meal!</small>
                </h5>

                <ul>
                  {recipes.map((recipe, index) => (
                    <li key={recipe.index} className="item-list">
                      <img src={recipe.image} width="150px" height="100px" />

                      <div>
                        <p>{recipe.name}</p>
                        {recipe.needs.length > 0 && (
                          <p class="ingredigents-list not-available">
                            missing {recipe.needs.length} of{" "}
                            {recipe.ingredients.length} items
                          </p>
                        )}
                      </div>

                      <div className="item-list-control">
                        <label
                          htmlFor={"button-show-recipe" + index}
                          className="button-recipe-label button-label-screen3"
                        />
                        <input
                          id={"button-show-recipe" + index}
                          className="button-ok"
                          onClick={() => history.push("/detail/" + index)}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>

      <label
        htmlFor="button-refresh"
        className="button-refresh-label button-label-screen3"
      />
      <input
        id="button-refresh"
        type="submit"
        className="button-refresh"
        onClick={() => history.push("/")}
      />
    </>
  );
}

export default withRouter(Recipes);
