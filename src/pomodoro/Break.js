import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function Break({ breakDuration, setBreakDuration }) {
  return (
    <div className="col">
      <div className="float-right">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-break">
            Break Duration: {minutesToDuration(breakDuration)}
          </span>
          <div className="input-group-append">
            <button
              onClick={() => {
                setBreakDuration(Math.max(1, breakDuration - 1));
              }}
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-break"
            >
              <span className="oi oi-minus" />
            </button>
            <button
              onClick={() => {
                setBreakDuration(Math.min(15, breakDuration + 1));
              }}
              type="button"
              className="btn btn-secondary"
              data-testid="increase-break"
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Break;