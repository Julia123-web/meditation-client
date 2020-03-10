import React, { Component } from "react";
import { connect } from "react-redux";
import { videosFetched } from "../../actions/videos";
import { loadVideos } from "../../actions/videos";
import VideoList from "./VideoList";
// import VideoForm from "../VideoForm";
import "../../App.css";

class videosContainer extends Component {
  state = {
    title: "",
    videos: ""
  };

  componentDidMount() {
    console.log("videos container props", this.props);
    this.props.videosFetched();
  }

  // handleChange = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   console.log("VIDEOS container state", this.state);

  //   this.props.loadVideos(this.state.title, this.state.videos);
  //   this.props.history.push("/videos");
  //   this.setState({ title: "", videos: "" });
  // };

  render() {
    return (
      <body className="video">
        <div>
          <VideoList videos={this.props.videos} />

          {/* <VideoForm
          text={"Videos"}
          values={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        /> */}
        </div>
      </body>
    );
  }
}

const mapStateToProps = state => {
  console.log("videos container mapStateToProps state", state);
  return {
    users: state.users.user,
    videos: state.videos
  };
};

export default connect(mapStateToProps, { videosFetched, loadVideos })(
  videosContainer
);
