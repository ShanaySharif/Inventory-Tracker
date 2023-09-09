import React from "react";
import PropTypes from "prop-types"
import { v4 } from 'uuid'; // new code


function NewTrackerForm(props){//add props as a perameter.
// console.log(props)
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTrackerCreation({
      names: event.target.names.value, 
      location: event.target.location.value, 
      issue: event.target.issue.value, 
      id: v4()
    });
  }

  NewTrackerForm.propTypes = {
    onNewTrackerCreation: PropTypes.func
  };

  return (
    <React.Fragment>
      <form onSubmit={handleNewTrackerFormSubmission}>
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
          name='roast'
          placeholder='Roast' />
        <textarea
          name='price'
          placeholder='Describe your issue.' />
        <button type='submit'>Help!</button>
      </form>
    </React.Fragment>
  );   
}
export default NewTrackerForm;