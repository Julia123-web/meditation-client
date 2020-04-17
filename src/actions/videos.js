import axios from "axios";

export const VIDEOS_FETCHED = "VIDEOS_FETCHED";
export const VIDEO_LOAD = "VIDEO_LOAD";

const dbUrl =
  process.DATABASE_URL || "https://meditation-server.herokuapp.com/";

function fetchedVideos(videos) {
  return {
    type: VIDEOS_FETCHED,
    payload: {
      videos: videos,
    },
  };
}
export const videosFetched = () => async (dispatch, getState) => {
  axios.get(`http://localhost:4000/videos`).then(function (response) {
    console.log("OOOOOI", response.data);
    dispatch(fetchedVideos(response.data));
  });
};

function videoLoad(video) {
  return {
    type: VIDEO_LOAD,
    payload: {
      video: video,
    },
  };
}
export const loadVideos = (title, videos) => {
  return async function (dispatch, getState) {
    // console.log();

    const token = getState().users.user.token;

    const response = await axios({
      method: "POST",
      url: `${dbUrl}/videos`,
      headers: { Authorization: `Bearer ${token}` },
      data: {
        title,
        videos,
      },
    });
    console.log("WHAT IS THAT", response);
    dispatch(videoLoad(response.data));
  };
};
