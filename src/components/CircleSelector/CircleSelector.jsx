import React from "react";
import "./CircleSelector.css";

const CircleSelector = ({
  circleNum,
  selectedCircleIdx,
  handleCircleSelection,
}) => {
  return (
    <div className="CircleSelector">
      {circleNum.map((circle, idx) => (
        <button
          className={selectedCircleIdx === idx ? "selected" : "color"}
          key={circle}
          onClick={() => handleCircleSelection(idx)}
        >
          {selectedCircleIdx === idx
            ? `Circle ${idx + 1} Selected`
            : `Select Circle ${idx + 1}`}
        </button>
      ))}
    </div>
  );
};

export default CircleSelector;
