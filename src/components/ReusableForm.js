import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
    return (
        <React.Fragment>
            <form onSubmit={props.formSubmissionHandler}>
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

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;