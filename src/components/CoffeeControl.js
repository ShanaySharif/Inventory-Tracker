import React from "react";
import NewCoffeeForm from "./NewCoffeeForm";
import CoffeeList from "./CoffeeList";
import CoffeeDetail from "./CoffeeDetail";


class CoffeeControl extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        formVisibleOnPage: false,
        mainCoffeeList: [],
        selectedCoffee: null,
      };

    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.selectedCoffee != null) {
      currentlyVisibleState = <CoffeeDetail coffee = {this.state.selectedCoffee} />
      buttonText = "Return to Coffee List";

  }
}



export default NewCoffeeForm