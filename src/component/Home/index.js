import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Row, Col, Container, Image } from "react-bootstrap";

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <h1> Living in the Present Moment</h1>
          <h2>What you Learn</h2>
          <li>Breathe and exhale in moments of tension and stress</li>
          <li>How to relax the mind to not feel bad or anxious</li>
          <li>Have the peace to make the life lighter</li>
          <h2>How it works</h2>
          <p>
            There are videos of 3-4 minutes teaching you how to go back to the
            present moment.
          </p>
          <h2>Prerequisites</h2>
          <p>
            NONE! There are no prerequisites for practice this meditation. All
            you need is a willingness to give just a few minutes a day to learn
            about a practice that can enhance your life forever (yes, forever!)
          </p>
        </Col>
        <Col>
          <div className="imageApp">
            <Image src="/image/meditation_header.jpg" rounded />
            <Link to={`/quotes`}>
              <Button variant="outline-warning">See more quotes!</Button>
            </Link>
          </div>
        </Col>
      </Row>
      <div className="imgContainer">
        <div>
          <img src="/image/createaccount.png" alt="" />
          <p>Create an account </p>
        </div>
        <div>
          {" "}
          <img src="/image/login.png" alt="" />
          <p>Log in </p>
        </div>
        <div>
          <img src="/image/practice.png" alt="" />
          <p>Start practicing </p>
        </div>
      </div>
    </Container>
  );
}

const mapStateToProps = state => ({ home: state.home });

export default connect(mapStateToProps)(Home);
