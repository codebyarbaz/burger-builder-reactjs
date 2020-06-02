import React, { Fragment, Component } from "react";

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
      <Fragment>
        <Header
          isSidebarOpen={this.state.isSidebarOpen}
          toggleSidebar={this.toggleSidebar.bind(this)}
        />
        <BurgerBuilder />
      </Fragment>
    );
  }
}
