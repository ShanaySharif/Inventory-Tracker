import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
    return (
      <React.Fragment>
          <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <h3>{props.origin} - {props.names}</h3>
        <p><em>{props.price}</em></p>
        <p><em>{props.roast}</em></p>
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
    whenCoffeeClicked: PropTypes.func // new PropType
  };



export default Coffee;