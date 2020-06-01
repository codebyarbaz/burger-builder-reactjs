import React from "react";

import "./OrderConfirmation.css";

const OrderConfirmation = (props) => {
  return (
    <div className="orderWrapper bg-white rounded text-center p-3 mx-auto">
      <ul className="list-unstyled">
        {Object.keys(props.ingredients).map((ingredient, index) => {
          return (
            <li key={index}>
              {ingredient} : {props.ingredients[ingredient]}
            </li>
          );
        })}
      </ul>

      <span className="d-block mb-3">Amount: ${props.totalPrice}</span>
      <button className="btn btn-secondary" onClick={props.continueOrder}>Continue Order</button>
    </div>
  );
};

export default OrderConfirmation;
