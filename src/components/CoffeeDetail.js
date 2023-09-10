
import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props) {
  const { coffee, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>{coffee.origin} - {coffee.names}</h3>
      <p><em>{coffee.price}</em></p>
      <p><em>{coffee.roast}</em></p>
      <p><strong>Pounds Left: {coffee.poundsLeft}</strong></p> 
      <button onClick={ props.onClickingEdit }>Edit Coffee</button> 
      <button onClick={()=> props.onClickingDelete(coffee.id) }>Delete Coffee</button>
      <button onClick={props.onSellCoffee}>Sell a Pound</button>
      <hr />
    </React.Fragment>
  );
}
CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func, 
  onClickingEdit: PropTypes.func ,
  onSellCoffee: PropTypes.func,
};
export default CoffeeDetail;