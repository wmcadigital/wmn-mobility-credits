import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// Import contexts
import { FormContext } from 'globalState/FormContext';
import { FormErrorContext } from 'globalState/FormErrorContext';
// Import components
import UploadTicket from './UploadTicket/UploadTicket';
import GenericError from '../../shared/Errors/GenericError';

const Step3 = ({
  currentStep,
  setCurrentStep,
  formRef,
  isFetching
}) => {
  const [formState] = useContext(FormContext); // Get the state of form data from FormContext
  const [errorState, errorDispatch] = useContext(FormErrorContext); // Get the error state of form data from FormErrorContext

  const handleContinue = () => {
    // If errors, then don't progress and set continue button to true(halt form and show errors)
    if (errorState.errors.length) {
      window.scrollTo(0, formRef.current.offsetTop); // Scroll to top of form
      errorDispatch({ type: 'CONTINUE_PRESSED', payload: true }); // set continue button pressed to true so errors can show
    } else {
      errorDispatch({ type: 'CONTINUE_PRESSED', payload: false }); // Reset submit button pressed before going to next step
      setCurrentStep(currentStep + 1); // Set to next step in form
      window.scrollTo(0, 0); // Scroll to top of page
    }
  };

  const { CustomerType, Application } = formState; // Destructure object

  // Set placeholder vars which we will change in the switch below (based on CustomerType)
  let elementsToRender; // Used to change conditional elements to render
  let shouldRenderUpload;


  return (
    <>
      <h2>Tell us about your ticket</h2>
      {errorState.errors.length && errorState.continuePressed && (
        <GenericError />
      )}

      <UploadTicket />

      <button
        type="submit"
        className="wmnds-btn wmnds-btn--disabled wmnds-col-1 wmnds-m-t-md"
        disabled={isFetching} // Disable button so users can't spam submit
      >
        Submit application
        {/* If API is fetching */}
        {isFetching && (
          <div
            className="wmnds-loader wmnds-loader--btn wmnds-btn__icon wmnds-btn__icon--right"
            role="alert"
            aria-live="assertive"
          >
            <p className="wmnds-loader__content">Content is loading...</p>
          </div>
        )}
      </button>
    </>
  );
};

Step3.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
  isPaperTicket: PropTypes.bool.isRequired,
  isSwiftOnMobile: PropTypes.bool.isRequired,
  formRef: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default Step3;
