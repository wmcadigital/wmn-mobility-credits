import React, { useReducer, createContext } from 'react';

export const FormContext = createContext(); // Create when context

export const FormProvider = (props) => {
  const { children } = props || {};

  // Set intial state of when
  const initialState = {
    CustomerType: '',
    Application: {},
  };

  // Set up a reducer so we can change state based on centralised logic here
  const reducer = (state, action) => {
    // Update the point to chosen
    switch (action.type) {
      case 'UPDATE_CUSTOMER_TYPE': {
        return {
          ...state,
          CustomerType: action.payload,
        };
      }

      // Remove the waypoint by the id
      case 'UPDATE_FORM_DATA': {
        return {
          ...state,
          Application: { ...state.Application, ...action.payload },
        };
      }

      // Remove the waypoint by the id
      case 'ADD_FORM_REF': {
        return {
          ...state,
          FormRef: action.payload,
        };
      }

      // Default should return intial state if error
      default:
        return initialState;
    }
  };

  // Set up reducer using reducer logic and initialState by default
  const [formState, formDispatch] = useReducer(reducer, initialState);

  // Pass state and dispatch in context and make accessible to children it wraps
  return (
    <FormContext.Provider value={[formState, formDispatch]}>
      {children}
    </FormContext.Provider>
  );
};
