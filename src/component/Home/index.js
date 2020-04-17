import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Row, Col, Container } from "react-bootstrap";
import "../../App.css";

function Home() {
  return (
    <div className="HomeContainer">
      <br />
      <h1 className="home-style"> Living in the Present Moment</h1>

      <Container>
        <Row>
          <Col>
            <h2 className="learn-style">What you Learn</h2>
            <ul className="text_style2">
              <li className="text_style">
                Breathe and exhale in moments of tension and stress
              </li>
              <li className="text_style">
                How to relax the mind to not feel bad or anxious
              </li>
              <li className="text_style">
                Have the peace to make the life lighter
              </li>
            </ul>
            <h2 className="learn-style">How it works</h2>
            <p className="text_style text_style2">
              There are videos of 3-4 minutes teaching you how to go back to the
              present moment.
            </p>
            <h2 className="learn-style">Prerequisites</h2>
            <p className="text_style text_style2">
              NONE! There are no prerequisites for practice this meditation. All
              you need is a willingness to give just a few minutes a day to
              learn about a practice that can enhance your life forever (yes,
              forever!)
            </p>
          </Col>
          <Col>
            <div>
              <h2 className="h2home">
                "The key to success is to focus on goals, not obstacles."
              </h2>
              <Link className="h2home" to={`/quotes`}>
                <Button variant="info">See more quotes</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="imgContainer">
        <div>
          <img src="/image/createaccount.png" alt="" />
          <h4>Create an account </h4>
        </div>
        <div>
          <img src="/image/login.png" alt="" />
          <h4>Log in </h4>
        </div>
        <div>
          <img src="/image/practice.png" alt="" />
          <h4>Start practicing </h4>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({ home: state.home });

export default connect(mapStateToProps)(Home);
