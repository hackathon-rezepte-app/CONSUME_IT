import React from "react";
import { withRouter } from "react-router";

function Start({ queryItems, history }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="one-half column" style={{ marginTop: "25%" }}>
            <h4>TAKE A PICTURE</h4>
            <h5>
              <small>and save some time for more netflix</small>
            </h5>
            <form>
              <label htmlFor="camera-upload" className="label-upload" />
              <br />
              <input
                id="camera-upload"
                className="file-input"
                type="file"
                accept="image/*"
                onChange={event => {
                  queryItems(event.target.files[0]);
                  history.push("/correct");
                }}
              />
            </form>
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

export default withRouter(Start);
