
import React from "react";
import PropTypes from "prop-types";


function CoffeeDetail(props) {
  console.log(props.coffee.poundsAvailabe)
  const { coffee } = props;

  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>{coffee.origin} - {coffee.name}</h3>
      <p><em>{coffee.price}</em></p>
      <p><em>{coffee.roast}</em></p>
      

      <p><em>Pounds Available: {coffee.poundsAvailabe}</em></p> 


      <button onClick={ props.onClickingEdit }>Edit Coffee</button> 
      <button onClick={()=> props.onClickingDelete(coffee.id) }>Delete Coffee</button>
      <button onClick={props.onSellCoffee}>Sell Coffee</button>

      

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