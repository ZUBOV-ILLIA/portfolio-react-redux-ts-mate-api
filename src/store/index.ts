import { createStore } from "redux";
import { Action, State } from "../react-app-env";

const initialState: State = {
 users: [],
};

const reducer = (state = initialState, action: Action) => {
  switch(action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: [...action.payload],
      }
    
    default:
      return state;
  }
};

export const store = createStore(reducer);