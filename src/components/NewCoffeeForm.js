import React from "react";
import PropTypes from "prop-types"
import { v4 } from 'uuid'; 
import ReusableForm from "./ReusableForm";



function NewCoffeeForm(props){
      function handleNewCoffeeFormSubmission(event) {
        event.preventDefault();
        const newCoffee = {
          names: event.target.names.value, 
          origin: event.target.origin.value, 
          price: event.target.price.value, 
          roast: event.target.roast.value, 
          poundsAvailabe: event.target.poundsAvailabe.value,
          id: v4()
        }
        // console.log (newCoffee.poundsAvailabe)
        
        props.onNewCoffeeCreation(newCoffee);
      }
    
      NewCoffeeForm.propTypes = {
        onNewCoffeeCreation: PropTypes.func
      };
    
    return (
      <React.Fragment>
        <ReusableForm 
          formSubmissionHandler={handleNewCoffeeFormSubmission}
          buttonText="Add" />
      </React.Fragment>
    );
  }
  NewCoffeeForm.propTypes = {
    onNewCoffeeCreation: PropTypes.func
  };


export default NewCoffeeForm;