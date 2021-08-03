import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function Focus({ focusDuration, setFocusDuration }) {
  return (
    <div className="col">
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-focus">
          Focus Duration: {minutesToDuration(focusDuration)}
        </span>
        <div className="input-group-append">
          <button
            onClick={() => {
              setFocusDuration(Math.max(5, focusDuration - 5));
            }}
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-focus"
          >
            <span className="oi oi-minus" />
          </button>
          <button
            onClick={() => {
              setFocusDuration(Math.min(60, focusDuration + 5));
            }}
            type="button"
            className="btn btn-secondary"
            data-testid="increase-focus"
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Focus;