import axios from "axios";

export const QUOTES_FETCHED = "QUOTES_FETCHED";

// const dbUrl = process.DATABASE_URL || "http://localhost:4000";

function fetchedQuotes(quotes) {
  return {
    type: QUOTES_FETCHED,
    payload: {
      quotes: quotes,
    },
  };
}
export const quotesFetched = () => async (dispatch, getState) => {
  axios
    .get(`https://meditation-server.herokuapp.com/`)
    .then(function (response) {
      console.log("HEEY", response.data);
      dispatch(fetchedQuotes(response.data));
    });
};
