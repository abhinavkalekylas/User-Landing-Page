import React from "react";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="container loader_container">
      <h2 className="load_text">Loading... Please wait..</h2>
      <div
        className="spinner spinner-border ms-auto"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default Loader;
