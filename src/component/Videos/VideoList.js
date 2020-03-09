import React from "react";
// import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

export default function VideoList(props) {
  if (!props.videos) return "Loading";

  return (
    <div className="flex-container">
      <ul>
        {/* <h2>{video.title}</h2> */}
        <br />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=SelZ6uFbw1Qfeature=youtu.be"
          // playing
        />
        <br />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=zQ2TgyMdVPUfeature=youtu.be"
          //playing
        />
        <br />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=D9sqk2WqnSAfeature=youtu.be"
          // playing
        />
        <br />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=5U4LPSJFxIEfeature=youtu.be"
          // playing
        />
        <br />
      </ul>
    </div>
  );
}
