import React from "react";
import PropTypes from "prop-types"
import { v4 } from 'uuid'; 



function NewCoffeeForm(props){
      function handleNewCoffeeFormSubmission(event) {
        event.preventDefault();
        props.onNewCoffeeCreation({
          names: event.target.names.value, 
          origin: event.target.origin.value, 
          price: event.target.price.value, 
          roast: event.target.roast.value, 
          id: v4()
        });
      }
    
      NewCoffeeForm.propTypes = {
        onNewCoffeeCreation: PropTypes.func
      };
    
      return (
        <React.Fragment>
          <form onSubmit={handleNewCoffeeFormSubmission}>
            <input
              type='text'
              name='names'
              placeholder='Coffee Name' />
            <input
              type='text'
              name='origin'
              placeholder='Origin' />
              <input
              type='text'
              name='price'
              placeholder='price' />
            <textarea
              name='roast'
              placeholder='Roast.' />
            <button type='submit'>Submit!</button>
          </form>
        </React.Fragment>
      );   
    }




export default NewCoffeeForm;