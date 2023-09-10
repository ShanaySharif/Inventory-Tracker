import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";


function EditCoffeeForm (props) {
  return (
    <React.Fragment>
      <ReusableForm 
        buttonText="Update Coffee" />
    </React.Fragment>
  );
}


EditCoffeeForm.propTypes = {
  coffee: PropTypes.object,
  onEditCoffee: PropTypes.func
};

export default EditCoffeeForm;