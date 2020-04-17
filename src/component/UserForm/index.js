import React from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const UserForm = props => {
  const isLogin = props.isLogin;
  return (
    <div>
      {props.text}
      <Form onSubmit={props.handleSubmit}>
        {!isLogin && (
          <>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={props.handleChange}
                value={props.values.name}
              />
            </Form.Group>
          </>
        )}

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={props.handleChange}
            value={props.values.email}
          />
        </Form.Group>
        <Form.Text className="text-muted"></Form.Text>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={props.handleChange}
            value={props.values.password}
          />
        </Form.Group>
        <Button variant="submit" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UserForm;
