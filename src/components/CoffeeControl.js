
// import React from "react";
// import NewCoffeeForm from "./NewCoffeeForm";
// import CoffeeList from "./CoffeeList";
// import CoffeeDetail from "./CoffeeDetail";

// class CoffeeControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       formVisibleOnPage: false,
//       mainCoffeeList: [],
//       selectedCoffee: null,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleAddingNewCoffeeToList = (newCoffee) => {
//     const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
//     this.setState({ mainCoffeeList: newMainCoffeeList, formVisibleOnPage: false });
//   }

//   handleChangingSelectedCoffee = (id) => {
//     const selectedCoffee = this.state.mainCoffeeList.find(
//       (coffee) => coffee.id === id
//     );
//     this.setState({ selectedCoffee: selectedCoffee });
//   }

//   handleClick = () => {
//     if (this.state.selectedCoffee !== null) {
//       this.setState({
//         formVisibleOnPage: false,
//         selectedCoffee: null
//       });
//     } else {
//       this.setState((prevState) => ({
//         formVisibleOnPage: !prevState.formVisibleOnPage,
//       }));
//     }
//   }

//   render() {
//     let currentlyVisibleState = null;
//     let buttonText = null;

//     if (this.state.selectedCoffee !== null) {
//       currentlyVisibleState = <CoffeeDetail coffee={this.state.selectedCoffee} />
//       buttonText = "Return to Coffee List";
//     } else if (this.state.formVisibleOnPage) {
//       currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList} />;
//       buttonText = "Return to Coffee List";
//     } else {
//       currentlyVisibleState = <CoffeeList coffeeList={this.state.mainCoffeeList} onCoffeeSelection={this.handleChangingSelectedCoffee} />;
//       buttonText = "Add Coffee";
//     }

//     return (
//       <React.Fragment>
//         {currentlyVisibleState}
//         <button onClick={this.handleClick}>{buttonText}</button>
//       </React.Fragment>
//     );
//   }
// }

// export default CoffeeControl;

