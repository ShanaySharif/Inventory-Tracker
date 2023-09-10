import React from "react";
import NewCoffeeForm from "./NewCoffeeForm";
import CoffeeList from "./CoffeeList";
import CoffeeDetail from "./CoffeeDetail";
import EditTicketForm from './EditCoffeeForm';


class CoffeeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
      selectedCoffee: null,
      totalPounds: 0,
      editing: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList
      .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
      .concat(coffeeToEdit);
    this.setState({
        mainCoffeeList: editedMainCoffeeList,
        editing: false,
        selectedCoffee: null
      });
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

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
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

    if (this.state.editing ) {      
      currentlyVisibleState = <EditCoffeeForm ticket = {this.state.selectedTicket} />
      buttonText = "Return to Ticket List";
    } else if (this.state.selectedTicket != null) {

    if (this.state.selectedCoffee != null) {
      currentlyVisibleState =
       <CoffeeDetail coffee = {this.state.selectedCoffee} 
       onClickingDelete = {this.handleDeletingCoffee} 
       onClickingEdit = {this.handleEditClick} />
      
      buttonText = "Return to Coffee Menu";
    }
    // if (this.state.selectedCoffee != null) {
    //   currentlyVisibleState = (
    //     <div>
    //       <CoffeeDetail coffee={this.state.selectedCoffee} />
    //       <p>Pounds Left: {this.state.selectedCoffee.poundsLeft}</p>
    //       <button onClick={this.handleSellCoffee}>Sell a Pound</button>
    //       <button onClick={this.handleDeletingCoffee}>Delete Coffee</button>
    //     </div>
    //   );
      
    //   buttonText = "Return to Coffee Menu";
  
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
          onEditTicket = {this.handleEditingTicketInList}
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
