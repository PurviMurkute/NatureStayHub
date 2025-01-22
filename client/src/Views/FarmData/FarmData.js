import React from "react";
import "./FarmData.css";

function FarmData({ image, title, address }) {
  return (
    <div className="d-flex flex-direction-row p-2">
      <div className="">
        <img src={image} alt="farm-img" className="farmhouse-img" />
      </div>
      <div className="px-2">
        <h4 className="farm-title text-justify">{title}</h4>
        <p className="text-justify">{address}</p>
      </div>
    </div>
  );
}

export default FarmData;
