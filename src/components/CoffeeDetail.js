
import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props) {
  const { coffee } = props;

  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>{coffee.origin} - {coffee.names}</h3>
      <p><em>{coffee.price}</em></p>
      <p><em>{coffee.roast}</em></p>
      <p><strong>Pounds Left: {coffee.poundsLeft}</strong></p> 
      
      <hr />
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object
};

export default CoffeeDetail;