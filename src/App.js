import React, { Fragment } from "react";

import Header from "./Components/Navigation/Header/Header";
import BurgerBuilder from "./Containers/BurgerBuilder/BurderBuilder";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Fragment>
      <Header />
      <BurgerBuilder />
    </Fragment>
  );
}

export default App;
