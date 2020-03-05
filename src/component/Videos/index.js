import React, { Component } from "react";
import { connect } from "react-redux";
import { loadVideos } from "../../actions/videos";
import VideoForm from "../VideoForm";

class videosContainer extends Component {
  state = {
    title: "",
    video: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("----WHAT IS STATE????----", this.state);
    this.props.dispatch(loadVideos(this.state.title, this.state.video));
    this.props.history.push("/videos");
    this.setState({ title: "", video: "" });
  };

  render() {
    return (
      <div>
        <VideoForm
          text={"Videos"}
          values={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("what is state", state);
  return {
    users: state.users.user
  };
};

export default connect(mapStateToProps)(videosContainer);
