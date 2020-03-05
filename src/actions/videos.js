import axios from "axios";

export const VIDEOS_FETCHED = "VIDEOS_FETCHED";
export const VIDEO_LOAD = "VIDEO_LOAD";

const dbUrl = process.DATABASE_URL || "http://localhost:4000";

function fetchedVideos(videos) {
  return {
    type: VIDEOS_FETCHED,
    payload: {
      videos: videos
    }
  };
}
export const videosFetched = (dispatch, getState) => {
  axios.get(`http://localhost:4000/videos`).then(function(response) {
    console.log("OOOOOI", response);
    dispatch(fetchedVideos(response.data));
  });
};

function videoLoad(video) {
  return {
    type: VIDEO_LOAD,
    payload: {
      video: video
    }
  };
}
export const loadVideos = (title, video) => {
  return async function(dispatch, getState) {
    const token = getState().users.user.token;

    const response = await axios({
      method: "POST",
      url: `${dbUrl}/videos`,
      headers: { Authorization: `Bearer ${token}` },
      data: {
        title,
        video
      }
    });
    console.log("WHAT IS THAT", response);
    dispatch(videoLoad(response.data));
  };
};
