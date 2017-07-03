import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import ShallowRenderer from "react-test-renderer/shallow";
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

class C1 extends Component {
  render() {
    return (
      <div id="C1" />
    );
  }
}

class C2 extends Component {
  render() {
    return (
      <div id="C2" />
    );
  }
}

class C3 extends Component {
  render() {
    return (
      <div id="C3" />
    );
  }
}

class Test extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/1" component={C1} />
        <Route exact path="/2" component={C2} />
        <Route exact path="/3" component={C3} />
      </Router>
    );
  }
}

it('renders without crashing', () => {

  const renderer = new ShallowRenderer();
  renderer.render(<Test />);
  const result = renderer.getRenderOutput();
  console.log(result);

  expect(result.type).toBe(Router);
  console.log(result.props.children);
});
