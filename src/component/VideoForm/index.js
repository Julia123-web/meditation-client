import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function VideoForm(props) {
  const {
    handleChange,
    handleSubmit,
    values: { title, video }
  } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="EventTitle">
        <Form.Label>Title:</Form.Label>
        <Form.Control
          type="text"
          name="title"
          onChange={handleChange}
          value={title}
        />
      </Form.Group>

      <Form.Group controlId="EventVideo">
        <Form.Label>Video:</Form.Label>
        <Form.Control
          type="text"
          name="video"
          onChange={handleChange}
          value={video}
        />
        <Form.Text className="text-muted"></Form.Text>
        <Button type="submit" bsstyle="primary">
          submit
        </Button>
      </Form.Group>
    </Form>
  );
}

export default VideoForm;
