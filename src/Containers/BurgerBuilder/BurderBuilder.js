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
      ingredientAdded: {},
      isPurchasable: false,
    };

    for (let ingredient in this.state.prices) {
      const obj = {
        name: ingredient,
        price: this.state.prices[ingredient],
      };

      this.state.ingredientAdded[ingredient] = 0;
      this.state.controls.push(obj);
    }
  }

  addIngredient(name) {
    const ingredients = [...this.state.ingredients];
    ingredients.push({ name });
    let currentPrice = this.state.totalPrice;
    currentPrice += this.state.prices[name];
    currentPrice = parseFloat(currentPrice.toFixed(2));

    const ingredientAdded = { ...this.state.ingredientAdded };
    ingredientAdded[name] += 1;

    this.setState({
      ...this.state,
      ingredients,
      totalPrice: currentPrice,
      ingredientAdded,
    });
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

      const ingredientAdded = { ...this.state.ingredientAdded };
      ingredientAdded[name] -= 1;

      this.setState({
        ...this.state,
        ingredients,
        totalPrice: currentPrice,
        ingredientAdded,
      });
    }
  }

  confirmOrder() {
    this.setState({ ...this.state, isPurchasable: true });
  }

  cancelPurchase() {
    this.setState({ ...this.state, isPurchasable: false });
  }

  resetBurger() {
    alert(
      `Thanks for purchasing! Your total bill is $${this.state.totalPrice}`
    );

    const initialState = {
      prices: {
        salad: 0.85,
        bacon: 1.99,
        cheese: 2.5,
        meat: 1.49,
      },
      ingredients: [],
      controls: [],
      totalPrice: 0,
      ingredientAdded: {},
      isPurchasable: false,
    };

    for (let ingredient in initialState.prices) {
      const obj = {
        name: ingredient,
        price: this.state.prices[ingredient],
      };

      initialState.ingredientAdded[ingredient] = 0;
      initialState.controls.push(obj);
    }

    this.setState(initialState);
  }

  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />

        <BuildControls
          ingredientAddedList={this.state.ingredientAdded}
          controls={this.state.controls}
          ingredientAdded={this.addIngredient.bind(this)}
          ingredientRemove={this.removeIngredient.bind(this)}
          price={this.state.totalPrice}
          confirmOrder={this.confirmOrder.bind(this)}
          isPurchasable={this.state.isPurchasable}
          resetBurger={this.resetBurger.bind(this)}
          cancelPurchase={this.cancelPurchase.bind(this)}
        />
      </Fragment>
    );
  }
}
