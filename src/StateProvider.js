// //setup data layer
// // we need this to track th basket
// import React, { createContext, useContext, useReducer} from 'react'

// //this is the datya layer
// export const StateContext = createContext();

// //Build a Provider
// export const StateProvider = ({ reducer, initialState, children}) => (
//   <StateContext.Provider value={useReducer (reducer, initialState)}>
//     {children}
//   </StateContext.Provider>
// )

// //this is how we use it inside of a component
// export const useStateValue = () => useContext(StateContext);

//setup data layer
// we need this to track th basket
import React, { createContext, useContext, useReducer} from 'react'

//this is the datya layer
export const StateContext = createContext();

//Build a Provider
export const StateProvider = ({ reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer (reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

//this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);