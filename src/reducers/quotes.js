import { QUOTES_FETCHED } from "../actions/quotes";

const initialState = [];
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case QUOTES_FETCHED:
      return [...action.payload.quotes];
    default:
      return state;
  }
};
