import { basename } from 'path';
import React from 'react';
import agent from './agent';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'loading' };
  }

  componentDidMount() {
    agent.Register.helloWorld().then(x => { this.setState({ text: x.text }); });
  }

  render() {
    return (
      <div>{this.state.text}</div>
    );
  }
}

export default Register;
