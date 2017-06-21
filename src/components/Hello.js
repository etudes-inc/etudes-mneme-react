import React, { Component } from 'react';

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {msg: "Hello earthings!"};
  }

  componentDidMount() {
    this.load();
  }

  componentWillUnmount() {
  }

  load() {
    fetch("/api/mneme/message")
      .then((response) => {return response.json();})
      .then((data) => {
        const newState = {msg: data.message};
        this.setState(newState);
      });
  }

  render() {
    return (
      <div>{this.state.msg}</div>
    );
  }
}

export default Hello;
