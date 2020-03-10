import React from "react";
import ReactPlayer from "react-player";
import { Row, Col, Container } from "react-bootstrap";

export default function VideoList(props) {
  if (!props.videos) return "Loading";

  return (
    <Container fluid>
      <br />
      <h1 className="home-style"> Time to relax your mind </h1>
      <br />
      <Row>
        <Col></Col>
        <Col>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=SelZ6uFbw1Qfeature=youtu.be"
            // playing
          />
        </Col>
        <Col>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=zQ2TgyMdVPUfeature=youtu.be"
            //playing
          />
        </Col>
        <Col></Col>
      </Row>
      <br />
      <Row>
        <Col></Col>
        <Col>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=D9sqk2WqnSAfeature=youtu.be"
            // playing
          />
        </Col>
        <Col>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=5U4LPSJFxIEfeature=youtu.be"
            // playing
          />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
