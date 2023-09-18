import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
    return (
      <React.Fragment>
          <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <h3>{props.origin} - {props.names}</h3>
        <p><em>{props.price}</em></p>
        <p><em>{props.roast}</em></p>
        <p><em>${props.price} per pound, {props.poundsAvailabe } pounds available</em></p>

        <hr/>
        </div>
      </React.Fragment>
    );
  }
  Coffee.propTypes = {
    names: PropTypes.string,
    origin: PropTypes.string,
    price: PropTypes.string,
    roast: PropTypes.string,
    id: PropTypes.string, // new PropType 
    poundsAvailabe: PropTypes.string,
    whenCoffeeClicked: PropTypes.func,
    whenSellClicked: PropTypes.func,
    whenEditClicked: PropTypes.func,
    whenDeleteClicked: PropTypes.func
    
    }; // new PropType




export default Coffee;


// import React from "react";
// import PropTypes from "prop-types";

// function Coffee(props) {
//   const handleSellCoffee = () => {
//     props.whenSellClicked(props.id); // Pass the coffee ID to the parent component
//   };

//   return (
//     <React.Fragment>
//       <div>
//         <h3>{props.origin} - {props.names}</h3>
//         <p><em>{props.price}</em></p>
//         <p><em>{props.roast}</em></p>
//         <p><em>${props.price}</em></p>
//         <p><em>${props.price} per pound, {props.availableCoffee} pounds available</em></p>
        
//         <button onClick={handleSellCoffee}>Sell Coffee</button> {/* Add a button to trigger selling */}
        
//         <hr />
//       </div>
//     </React.Fragment>
//   );
// }

// Coffee.propTypes = {
//   names: PropTypes.string,
//   origin: PropTypes.string,
//   price: PropTypes.string,
//   roast: PropTypes.string,
//   id: PropTypes.string,
//   availableCoffee: PropTypes.number,
//   whenCoffeeClicked: PropTypes.func,
//   whenSellClicked: PropTypes.func, // Add the new prop type for selling coffee
//   whenEditClicked: PropTypes.func,
//   whenDeleteClicked: PropTypes.func
// };

// export default Coffee;