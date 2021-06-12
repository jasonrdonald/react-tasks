import React, { createContext, useReducer } from "react";

const initialState = {
  isFetching: false,
  questions: [],
};

const Reducer = (state, action) => {
  switch (action.type) {
  case "FETCH_TRIVIA_START":
    console.log("Fetching trivia");
    return {...state, isFetching: true}
  case "FETCH_TRIVIA_SUCCESS":
    console.log(action.payload);
    return {...state, isFetching: false, questions: action.payload}
  case "FETCH_TRIVIA_FAILURE":
    const error = action.payload
    alert(`There was an error fetching trivia: ${error.message}. Please try again.`)
    return {...state, isFetching: false}
  default:
    throw new Error();
  }
}


export const Context = createContext(initialState)

export const StoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return(
    <Context.Provider value={[state, dispatch]}>
      { children }
    </Context.Provider>
  )
}