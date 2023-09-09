import React from 'react';
import Coffee from './Coffee';
import PropTypes from "prop-types";

function CoffeeList(props){ 
    return (
        <React.Fragment>
          <hr/>
          {props.coffeeList.map((coffee) => 
            <Coffee
            whenCoffeeClicked = { props.onCoffeeSelection }
              names={coffee.names}
              origin={coffee.origin}
              price={coffee.price}
              roast={coffee.roast}
              id = {coffee.id}
              key={coffee.id}/>
          )}
        </React.Fragment>
    );
  }

  //Add propTypes for ticketList.
  CoffeeList.propTypes = {
    coffeeList: PropTypes.array,
    onCoffeeSelection: PropTypes.func
  };
      
  







export default CoffeeList;