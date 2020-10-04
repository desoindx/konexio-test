import React from 'react';

import { Button, Spinner, FormControl, Container, Row, Col } from 'react-bootstrap';
import agent from './agent';

import styles from './user.cssmodule.scss';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [], loading: true };
  }

  componentDidMount() {
    agent.getUser().then(response => this.setState({ users: response.users, loading: false }));
  }

  registerNewUser() {
    this.props.history.push('/register');
  }

  onChange(key, value) {
    const { id } = this.props.match.params;
    const newValue = value.target.value;
    this.setState(prevState => {
      const newUsers = [...prevState.users];
      newUsers.find(u => u.id === id)[key] = newValue;
      return { users: newUsers };
    });
  }

  modifyUser(id) {
    this.props.history.push(`/users/${id}`);
  }

  saveUser() {
    const { id } = this.props.match.params;
    const user = this.state.users.find(u => u.id === id);
    agent.saveUser(id, user).then(() => this.props.history.push('/'));
  }

  render() {
    const { loading, users } = this.state;
    const { id } = this.props.match.params;
    if (loading) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }
    return (
      <Container className="page">
        <Row className={styles.title}>
          <Col>
            First Name
          </Col>
          <Col>
            Last Name
          </Col>
          <Col />
        </Row>
        {users.map(user => (
          <Row key={user.id} className={styles.user}>
            {id === user.id ? (
              <>
                <Col>
                  <FormControl
                    placeholder="First name..."
                    value={user.firstName}
                    onChange={value => this.onChange('firstName', value)}
                  />
                </Col>
                <Col>
                  <FormControl
                    placeholder="Last name..."
                    value={user.lastName}
                    onChange={value => this.onChange('lastName', value)}
                  />
                </Col>
                <Col className={styles.userButton}>
                  <Button onClick={() => this.saveUser()}>Save modification</Button>
                </Col>
              </>
            ) : (
              <>
                <Col>
                  {user.firstName}
                </Col>
                <Col>
                  {user.lastName}
                </Col>
                <Col className={styles.userButton}>
                  <Button onClick={() => this.modifyUser(user.id)}>Modify</Button>
                </Col>
              </>
            )}
          </Row>
        ))}
        <Button className={styles.newUser} onClick={() => this.registerNewUser()}>Register a new user</Button>
      </Container>
    );
  }
}

export default User;
