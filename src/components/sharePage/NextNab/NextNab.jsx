import React from "react";
import bg1 from "../../../assets/images/bg1.png";
import bg2 from "../../../assets/images/bg2.png";
import Header from "../../Header/Header";
const NextNab = () => {
  return (
    <div>
      <div className="flex justify-between">
        <img src={bg1} alt="" />
        <img src={bg2} alt="" />
      </div>
    </div>
  );
};

export default NextNab;
