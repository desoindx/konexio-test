import React from 'react';

import { Button, Col, Form, Row } from 'react-bootstrap';
import agent from './agent';

import styles from './register.cssmodule.scss';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }

    handleSubmit = event => {
      const form = event.currentTarget;
      const values = event.target.elements;
      const errors = [];
      if (!values.termsAndConditions.checked) {
        errors.push('termsAndConditions');
      }

      if (values.password.value !== values.passwordConfirmation.value) {
        errors.push('passwordConfirmation');
      }

      this.setState({ errors, validated: true });

      if (form.checkValidity() && errors.length === 0) {
        agent.register({
          firstName: values.firstName.value,
          lastName: values.lastName.value,
          email: values.email.value,
        }).then(() => {
          this.props.history.push('/');
        });
      }
      event.preventDefault();
    };

    cancel = () => {
      this.props.history.push('/');
    }

    render() {
      const { errors, validated } = this.state;
      return (
        <Form className={`page ${styles.form}`} noValidate validated={validated} onSubmit={this.handleSubmit}>
          <Form.Group controlId="firstName">
            <Form.Control required type="text" placeholder="First name..." />
            <Form.Control.Feedback type="invalid">
              Please indicate your first name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Control type="text" placeholder="Last name..." />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Control required type="email" placeholder="Email..." />
            <Form.Control.Feedback type="invalid">
              Invalid email
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control required type="password" placeholder="Password..." />
            <Form.Control.Feedback type="invalid">
              Please indicate your password
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="passwordConfirmation">
            <Form.Control
              required
              type="password"
              placeholder="Please confirm your password..."
              isInvalid={errors.includes('passwordConfirmation')}
            />
            <Form.Control.Feedback type="invalid">
              password does not match
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="status">
            <Form.Control as="select">
              <option>Teacher</option>
              <option>Teacher assistant</option>
              <option>Student</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="picture">
            <Form.File
              name="picture"
              label="Picture"
              feedback="Please provide a profile picture"
            />
          </Form.Group>
          <Form.Group controlId="newsletter">
            <Form.Check type="checkbox" label="Subscribe to newsletter" />
          </Form.Group>
          <Form.Group
            controlId="termsAndConditions"
          >
            <Form.Check
              type="checkbox"
              label="I have read terms and conditions"
              isInvalid={errors.includes('termsAndConditions')}
              feedback="You must read the terms and conditions"
            />
          </Form.Group>
          <Row>
            <Col>
              <Button variant="primary" type="submit">
                Submit
              </Button>

            </Col>
            <Col className={styles.cancelButton}>
              <Button variant="secondary" onClick={() => this.cancel()}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      );
    }
}

export default Register;
