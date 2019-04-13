import React from "react";
import { withRouter } from "react-router";
import { ClipLoader } from "react-spinners";

function Correct({ items, setItems, queryRecipes, history }) {
  function deleteItem(index) {
    items.splice(index, 1);
    setItems([...items]);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="one-half column" style={{ marginTop: "25%" }}>
          <h4>WE FOUND:</h4>
          <h5>
            <small>please correct, robots are only robots</small>
          </h5>

          {!items && (
            <ClipLoader
              css={{ marginTop: "20px" }}
              sizeUnit={"px"}
              size={50}
              color={"#7AC6B8"}
              loading={true}
            />
          )}

          <ul>
            {items &&
              items.map((item, index) => (
                <li key={index} className="item-list">
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
                    <input
                      id="button-no"
                      className="button-no"
                      type="submit"
                      onClick={() => deleteItem(index)}
                    />
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>

      {items && items.length > 0 && (
        <>
          <label
            htmlFor="button-next"
            className="button-next-label button-label-screen3"
          />
          <input
            id="button-next"
            type="submit"
            className="button-next"
            onClick={() => {
              history.push("/recipes");
              queryRecipes(items);
            }}
          />
        </>
      )}
    </div>
  );
}

export default withRouter(Correct);
