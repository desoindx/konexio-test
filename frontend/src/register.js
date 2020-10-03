import React from 'react';

import { Button, Form } from 'react-bootstrap';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

    handleSubmit = event => {
      const form = event.currentTarget;
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      // console.log('submit', event.target.element.firstName.value);
      this.setState({ validated: true });
      event.preventDefault();
    };

    render() {
      return (
        <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
          <Form.Group controlId="firstName">
            <Form.Control required type="text" placeholder="First name..." />
            <Form.Control.Feedback type="invalid">
              Your first name is mandatory to register.
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      );
    }
}

export default Register;
