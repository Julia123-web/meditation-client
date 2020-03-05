import { VIDEOS_FETCHED, VIDEO_LOAD } from "../actions/videos";

const initialState = [];
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case VIDEOS_FETCHED:
      return [...action.payload.videos];
    case VIDEO_LOAD:
      return action.payload.video;
    default:
      return state;
  }
};
