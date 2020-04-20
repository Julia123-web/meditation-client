import axios from "axios";

export const QUOTES_FETCHED = "QUOTES_FETCHED";

const dbUrl = process.DATABASE_URL || "https://meditation-server.herokuapp.com";

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
    .get(`${dbUrl}/quotes`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then(function (response) {
      console.log("HEEY", response.data);
      dispatch(fetchedQuotes(response.data));
    });
};
