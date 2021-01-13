import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// Import contexts
import { FormContext } from 'globalState/FormContext';
import { FormErrorContext } from 'globalState/FormErrorContext';
// Import components
import Radios from 'components/shared/FormElements/Radios/Radios';
import GenericError from 'components/shared/Errors/GenericError';

const Step1 = ({
  currentStep,
  setCurrentStep,
  setIsPaperTicket,
  setIsSwiftOnMobile,
  formRef,
  vehicle
}) => {
  const [formState, formDispatch] = useContext(FormContext); // Get the state of form data from FormContext
  const [errorState, errorDispatch] = useContext(FormErrorContext); // Get the error state of form data from FormErrorContext
  // Update customerType on radio button change
  const handleRadioChange = (e) => {
    formDispatch({ type: 'UPDATE_CUSTOMER_TYPE', payload: e.target.value });

    if (e.target.value === 'VehicleCorrect') {
      setIsPaperTicket(true); // Then set paper ticket to true (value used in step 3)
    } else {
      setIsPaperTicket(false); // Else set to false
    }
    if (e.target.value === 'VehicleIncorrect') {
      setIsSwiftOnMobile(true);
    } else {
      setIsSwiftOnMobile(false);
    }
  };

  // Update the current step to the correct one depending on users selection
  const handleContinue = () => {
    // If errors, then don't progress and set continue button to true(halt form and show errors)
    if (errorState.errors.length) {
      window.scrollTo(0, formRef.current.offsetTop); // Scroll to top of form
      errorDispatch({ type: 'CONTINUE_PRESSED', payload: true }); // set continue button pressed to true so errors can show
    } else {

      setCurrentStep(currentStep + 2); // Skip to last steps as payment info isn't needed for scratchcard and classPass
      }

  };
  return (
    <>
      <h2>Your details</h2>
      {errorState.errors.length > 0 && errorState.continuePressed && (
        <GenericError />
      )}
      <p>We have recorded your vehicle as a {vehicle}.</p>
      <Radios
        name="CustomerType"
        label="Is this correct?"
        radios={[
          { text: 'Yes', value: 'VehicleCorrect' },
          {
            text: 'No',
            value: 'VehicleIncorrect',
          },
        ]}
        onChange={handleRadioChange}
      />
      <button
        type="button"
        className="wmnds-btn wmnds-btn--disabled wmnds-col-1 wmnds-m-t-md"
        onClick={() => handleContinue()}
      >
        Continue
      </button>
    </>
  );
};

Step1.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
  setIsPaperTicket: PropTypes.func.isRequired,
  setIsSwiftOnMobile: PropTypes.func.isRequired,
  formRef: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default Step1;
