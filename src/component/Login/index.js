import React, { Component } from "react";
import UserForm from "../UserForm";
import { connect } from "react-redux";
import { login } from "../../actions/users";

class LoginContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("----ITS EMPTY?----", this.state);
    this.props.dispatch(login(this.state.email, this.state.password));
    this.props.history.push("/videos");
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="signup">
        <UserForm
          text=""
          isLogin
          values={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    userLoggedIn: state.users.token !== null
  };
};

export default connect(mapStateToProps)(LoginContainer);
