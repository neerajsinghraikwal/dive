import React from "react";
import "../styles/Spinner.css";
import image from "../assets/spin.svg";
const Spinner = () => {
  return (
    <div className="example">
      <img src={image} alt="Loading ..." />
    </div>
  );
};

export default Spinner;
