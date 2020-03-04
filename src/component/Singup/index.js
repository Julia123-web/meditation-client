import React, { Component } from "react";
import UserForm from "../UserForm/index";
import { connect } from "react-redux";
import { signUp } from "../../actions/users";

class SingupFormContainer extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("-------STATE----", this.state);
    this.props.dispatch(
      signUp(this.state.name, this.state.email, this.state.password)
    );
    this.props.history.push("/login");
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    return (
      <div>
        {this.props.userCreated ? <h1>Account created</h1> : null}
        <UserForm
          text={"Signup"}
          values={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("-----STATE AGAIN-----", state);
  return {
    userCreated: state.users.userCreated
  };
};

export default connect(mapStateToProps)(SingupFormContainer);
