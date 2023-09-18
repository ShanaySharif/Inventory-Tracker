import React from 'react';
import Coffee from './Coffee';
import PropTypes from "prop-types";

function CoffeeList(props){ 

  if (!Array.isArray(props.coffeeList) || props.coffeeList.length === 0) {
    return <div>
                <h3>Sorry! No Coffee Available.</h3>
            </div>
}
  
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
              poundsAvailabe={coffee.poundsAvailabe}

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