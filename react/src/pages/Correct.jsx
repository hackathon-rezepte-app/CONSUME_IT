import React, { useState } from "react";
import { withRouter } from "react-router";
import { ClipLoader } from "react-spinners";

function Correct({ image, items, setItems, queryRecipes, history }) {
  function deleteItem(index) {
    items.splice(index, 1);
    setItems([...items]);
  }

  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  const fr = new FileReader();

  fr.onload = function() {
    // file is loaded
    var img = new Image();

    img.onload = function() {
      setWidth(img.width); // image is loaded; sizes are available
      setHeight(img.height);
    };

    img.src = fr.result; // is the data URL because called with readAsDataURL
  };

  fr.readAsDataURL(image);

  const imageURL = URL.createObjectURL(image);

  return (
    <>
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
                items.map((item, index) => {
                  const real_h = 100 / item.boundingBox.height;
                  const real_w = real_h * (width / height);
                  return (
                    <li key={index} className="item-list">
                      <div
                        style={{
                          width: "150px",
                          height: "100px",
                          backgroundImage: `url(${imageURL})`,
                          backgroundPosition: `left ${-item.boundingBox.left *
                            real_w}px top ${-item.boundingBox.top * real_h}px`,
                          backgroundSize: `${real_w}px`
                        }}
                      />
                      {item.tagName}
                      <div className="item-list-control">
                        {/* <label
                          htmlFor="button-ok"
                          className="button-ok-label button-label-screen3"
                        />
                        <input
                          id="button-ok"
                          type="submit"
                          className="button-ok"
                        /> */}

                        <label
                          htmlFor={"button-no" + index}
                          className="button-no-label button-label-screen3"
                        />
                        <input
                          id={"button-no" + index}
                          className="button-no"
                          type="submit"
                          onClick={() => deleteItem(index)}
                        />
                      </div>
                    </li>
                  );
                })}
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

      <label
        htmlFor="button-refresh"
        class="button-refresh-label button-label-screen3"
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

export default withRouter(Correct);
