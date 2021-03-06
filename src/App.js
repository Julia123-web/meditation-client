import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import Login from "./component/Login/index";
import SignUp from "./component/Singup/index";
import Home from "./component/Home/index";
import Videos from "./component/Videos/index";
import Quotes from "./component/Quotes/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Time to breathe!</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="signup">Signup</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
          </Nav>
        </Navbar>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/videos" component={Videos} />
        <Route exact path="/quotes" component={Quotes} />
      </Router>
    </div>
  );
}

export default connect()(App);
