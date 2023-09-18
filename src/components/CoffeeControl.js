import React from "react";
import NewCoffeeForm from "./NewCoffeeForm";
import CoffeeList from "./CoffeeList";
import CoffeeDetail from "./CoffeeDetail";
import EditCoffeeForm from './EditCoffeeForm';

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
    // newCoffee.poundsAvailabe = 130;
    console.log(newCoffee)
    const newMainCoffeeList = 
     this.state.mainCoffeeList.concat(newCoffee)
    // const newTotalPounds = this.state.totalPounds + 130;
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      // totalPounds: newTotalPounds,
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
    if (this.state.selectedCoffee && this.state.selectedCoffee.poundsAvailabe > 0) {
      const { mainCoffeeList, selectedCoffee } = this.state
      const index = mainCoffeeList.indexOf(product => product.id === selectedCoffee.id)
      const pounds = selectedCoffee.poundsAvailabe
    
      const updatedCoffee = { ...selectedCoffee, poundsAvailabe: pounds - 1 };
      mainCoffeeList[index] = updatedCoffee
      // console.log(this.state.mainCoffeeList, mainCoffeeList)
      this.setState({ mainCoffeeList, selectedCoffee:updatedCoffee })
    }
  }
  handleClick = () => {
    if (this.state.selectedCoffee !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {      
      currentlyVisibleState = <EditCoffeeForm coffee = {this.state.selectedCoffee} 
      onEditCoffee={this.handleEditingCoffeeInList}/>
      buttonText = "Return to Coffee Menu";
    

    } else if (this.state.selectedCoffee != null) {
      currentlyVisibleState =
       <CoffeeDetail
      coffee = {this.state.selectedCoffee} 
       onClickingDelete = {this.handleDeletingCoffee} 
       onClickingEdit={this.handleEditClick} 
       onSellCoffee={this.handleSellCoffee}/>
      buttonText = "Return to Coffee Menu";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList} />
      );
      buttonText = "Return to Coffee Menu";
    } else {

      console.log(this.state.mainCoffeeList)

      currentlyVisibleState = (
        <CoffeeList
          coffeeList={this.state.mainCoffeeList}
          onCoffeeSelection={this.handleChangingSelectedCoffee}
          onClickingEdit = {this.handleEditClick}
          onClick= {this.handleSellCoffee}
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