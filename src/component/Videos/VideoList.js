import React from "react";
// import { Link } from "react-router-dom";

export default function VideoList(props) {
  if (!props.videos) return "Loading";

  return (
    <div>
      {props.videos.map(video => {
        console.log("mapped videos", video);

        return (
          <div>
            <ul key={video.videoId}>
              <h2>{video.title}</h2>
              <br />
              <video
                width="320"
                height="240"
                controls
                src={video.videos}
                type="video/mp4"
                alt={video.videoId}
              />
            </ul>
          </div>
        );
      })}
    </div>
  );
}
