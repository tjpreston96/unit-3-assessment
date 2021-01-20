import React from "react";
import "./Circles.css";

const Circles = (props) => {
  return (
    <div className="Circles">
      {props.circleNum.map((circle, idx) => (
        <div
          className={props.selectedCircleIdx === idx ? "selected" : "color"}
          key={circle}
          onClick={() => props.handleCircleSelection(idx)}
        >
          {idx + 1}
        </div>
      ))}
    </div>
  );
};

export default Circles;
