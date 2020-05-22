import React, { Fragment } from "react";

export default function BuildControls(props) {
  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-around mb-3">
        <span className="d-inline-block text-capitalize">{props.control.name}</span>
        <button
          className="btn btn-primary"
          onClick={() => props.addIngredient(props.control.name)}
        >
          Add
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => props.removeIngredient(props.control.name)}
        >
          Remove
        </button>
      </div>
    </Fragment>
  );
}
