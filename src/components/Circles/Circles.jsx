import React from "react";
import "./Circles.css";

const Circles = ({ selectedCircleIdx, circleNum, handleCircleSelection }) => {
  return (
    <div className="Circles">
      {circleNum.map((circle, idx) => (
        <div
          className={selectedCircleIdx === idx ? "selected" : "color"}
          key={circle}
          onClick={() => handleCircleSelection(idx)}
        >
          {idx + 1}
        </div>
      ))}
    </div>
  );
};

export default Circles;
