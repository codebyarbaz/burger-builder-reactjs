import React, { Component, Fragment } from "react";

const errorHandler = (BurgerBuilder) => {
  return class extends Component {
    state = {
      error: false,
    };
    render() {
      let errorMsg = null;
      let burgerComponent = <BurgerBuilder {...this.props} />;

      if (this.state.error === true) {
        errorMsg = <h1 className="text-center">Something went wrong!</h1>;
        burgerComponent = null;
      }

      return (
        <Fragment>
          {errorMsg}
          {burgerComponent}
        </Fragment>
      );
    }
  };
};

export default errorHandler;
