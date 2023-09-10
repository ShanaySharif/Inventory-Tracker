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
      totalPounds: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleAddingNewCoffeeToList = (newCoffee) => {
    newCoffee.poundsLeft = 130;
    const newMainCoffeeList = [...this.state.mainCoffeeList, newCoffee];
    const newTotalPounds = this.state.totalPounds + 130;
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      totalPounds: newTotalPounds,
      formVisibleOnPage: false,
    });
  }
  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.find(
      (coffee) => coffee.id === id
    );
    this.setState({ selectedCoffee: selectedCoffee });
  }
  handleDeletingCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: null
    });
  }

  handleSellCoffee = () => {
    if (this.state.selectedCoffee && this.state.selectedCoffee.poundsLeft > 0) {
      const updatedCoffee = { ...this.state.selectedCoffee };
      updatedCoffee.poundsLeft = Math.max(updatedCoffee.poundsLeft - 1, 0);

      const updatedCoffeeList = this.state.mainCoffeeList.map((coffee) =>
        coffee.id === updatedCoffee.id ? updatedCoffee : coffee
      );
      const newTotalPounds = this.state.totalPounds - 1;
      this.setState({
        mainCoffeeList: updatedCoffeeList,
        selectedCoffee: updatedCoffee,
        totalPounds: newTotalPounds,
      });
    }
  }
  handleClick = () => {
    if (this.state.selectedCoffee !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedCoffee !== null) {
      currentlyVisibleState = (
        <div>
          <CoffeeDetail coffee={this.state.selectedCoffee} />
          <button onClick={this.handleSellCoffee}>Sell a Pound</button>
          <button onClick={this.handleDeletingCoffee}>Delete Coffee</button>
        </div>
      );
      buttonText = "Return to Coffee Menu";

    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList} />
      );
      buttonText = "Return to Coffee Menu";
    } else {
      currentlyVisibleState = (
        <CoffeeList
          coffeeList={this.state.mainCoffeeList}
          onCoffeeSelection={this.handleChangingSelectedCoffee}
        />
      );
      buttonText = "Add Coffee";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default CoffeeControl;
