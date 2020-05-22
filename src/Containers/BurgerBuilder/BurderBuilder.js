import React, { Component, Fragment } from "react";

import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/BuildControls/BuildControls";

export default class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: {
        salad: 0.85,
        bacon: 1.99,
        cheese: 2.5,
        meat: 1.49,
      },
      ingredients: [],
      controls: [],
      totalPrice: 0,
    };

    for (let ingredient in this.state.prices) {
      const obj = {
        name: ingredient,
        price: this.state.prices[ingredient],
      };

      this.state.controls.push(obj);
    }
  }

  addIngredient(name) {
    const ingredients = [...this.state.ingredients];
    ingredients.push({ name });
    let currentPrice = this.state.totalPrice;
    currentPrice += this.state.prices[name];
    currentPrice = parseFloat(currentPrice.toFixed(2));
    this.setState({ ...this.state, ingredients, totalPrice: currentPrice });
  }

  removeIngredient(name) {
    const ingredients = [...this.state.ingredients];

    const index = ingredients.findIndex(
      (ingredient) => ingredient.name === name
    );
    if (index > -1) {
      ingredients.splice(index, 1);
      let currentPrice = this.state.totalPrice;
      currentPrice -= this.state.prices[name];
      currentPrice = parseFloat(currentPrice.toFixed(2));
      this.setState({ ...this.state, ingredients, totalPrice: currentPrice });
    }
  }

  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />;
        <BuildControls
          controls={this.state.controls}
          ingredientAdded={this.addIngredient.bind(this)}
          ingredientRemove={this.removeIngredient.bind(this)}
          price={this.state.totalPrice}
        />
      </Fragment>
    );
  }
}
