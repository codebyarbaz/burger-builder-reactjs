import React, { Fragment } from "react";

import "./BuildControl.css";

export default function BuildControls(props) {
  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-center mb-3">
        <div className="itemsLableWrapper">
          <span className="d-block text-capitalize">{props.control.name}</span>
        </div>
        <div className="CTAWrapper">
          <button
            className="btn btn-primary mr-4"
            onClick={() => props.addIngredient(props.control.name)}
          >
            Add
          </button>
          <button
            disabled={props.totalIngredientAdded === 0}
            className="btn btn-secondary mr-4"
            onClick={() => props.removeIngredient(props.control.name)}
          >
            Remove
          </button>

          <span className="d-inline-block">{props.totalIngredientAdded} Items</span>
        </div>
      </div>
    </Fragment>
  );
}
