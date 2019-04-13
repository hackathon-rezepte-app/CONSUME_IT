import React from "react";

function Splash() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="one-half column" style={{ marginTop: "25%" }}>
            <h1>FRIDGY HOLLOW</h1>
            <h4>prevent trash, save cash!</h4>
          </div>
        </div>
      </div>
      <img alt="logo" src="images/cook_splash.png" className="splash-img" />
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

export default Splash;
