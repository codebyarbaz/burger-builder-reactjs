import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Components/Navigation/Header/Header";
import BurgerBuilder from "./Containers/BurgerBuilder/BurderBuilder";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: false,
    };
  }

  toggleSidebar() {
    if (window.innerWidth <= 992) {
      this.setState((prevState) => {
        return { ...prevState, isSidebarOpen: !prevState.isSidebarOpen };
      });
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Header
          isSidebarOpen={this.state.isSidebarOpen}
          toggleSidebar={this.toggleSidebar.bind(this)}
        />
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/orders" exact render={() => <p>Orders</p>} />
        <Route path="/account" exact render={() => <p>Account</p>} />
        <Route path="/checkout" exact render={() => <p>Checkout</p>} />
      </BrowserRouter>
    );
  }
}
