/**********************************************************************************
 *
 * Copyright (c) 2017 Etudes, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 **********************************************************************************/

jest.mock("../services/Authentication");

import React from "react";
//import ReactDOM from "react-dom";
import ShallowRenderer from "react-test-renderer/shallow";
import {MemoryRouter as Router} from "react-router-dom";
import {Alert, Button} from "react-bootstrap";
import Block from "../components/Block";
import Assessments from "../views/Assessments";
import AssessmentsList from "../views/AssessmentsList";
import ReactTestUtils from "react-dom/test-utils";
import Authentication from "../services/Authentication";

/*
Assessments.test.js
test

Tests for the <Assessments /> view (component).
*/

// http://engineering.pivotal.io/post/stub-dont-shallow-render-your-child-components/
const stubComponent = function(componentClass, methods) {
  const lifecycleMethods = [
      'render',
      'componentWillMount',
      'componentDidMount',
      'componentWillReceiveProps',
      'shouldComponentUpdate',
      'componentWillUpdate',
      'componentDidUpdate',
      'componentWillUnmount'
  ];
  const methodsToStub = methods === undefined? lifecycleMethods : methods;

  const originalPropTypes = componentClass.propTypes;

  beforeEach(function() {
    const originalPropTypes = componentClass.propTypes;

    methodsToStub.forEach(method => {
      if(typeof componentClass.prototype[method] !== 'undefined') {
        spyOn(componentClass.prototype, method).and.returnValue(null);
      }
    });
  });

  afterEach( () => {
    componentClass.propTypes = originalPropTypes;
  });
};

it("has div containing a block holding an AssessmentsList", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Assessments />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe("div");
  expect(result.props.children).toBeDefined();
  expect(result.props.children).toContainEqual(<Block><AssessmentsList /></Block>);
});

// temp feature - will eventually contain only one
it("has a div containing 3 elements (temp feature)", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Assessments />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe("div");
  expect(result.props.children).toBeDefined();
  expect(result.props.children).toHaveLength(3);
});

it("has a div containing, as the first element, an info Alert with this message", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Assessments />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe("div");
  expect(result.props.children).toBeDefined();
  expect(result.props.children[0].type).toBe(Alert);
  expect(result.props.children[0].props.bsStyle).toBe("info");
  expect(result.props.children[0].props.children).toEqual([ "Hello ", "User", "!  Welcome to Mneme." ]);
});

describe("with a full rendering", function(){
  stubComponent(Assessments, ["componentDidMount", "componentWillUnmount"]);
  stubComponent(AssessmentsList);

  it("starts with a default auth.name of 'User', and the alert visible, with the default text", () => {
    const component = ReactTestUtils.renderIntoDocument(<Router><Assessments /></Router>);

    const a = ReactTestUtils.findRenderedComponentWithType(component, Assessments);
    expect(a.state.auth.name).toBe("User");
    expect(a.state.alertVisible).toBeTruthy();

    const alert = ReactTestUtils.findRenderedComponentWithType(component, Alert);
    expect(alert.props.children).toEqual([ "Hello ", "User", "!  Welcome to Mneme." ]);
  });
});

describe("with a full rendering allowing Assessments.componentDidMount", function(){
  stubComponent(Assessments, ["componentWillUnmount"]);
  stubComponent(AssessmentsList);

  it("calls for authentication info, then shows it in the alert text", () => {
    Authentication.__setup__("info",{givenName: "Sir", familyName: "Comference"});
    const component = ReactTestUtils.renderIntoDocument(<Router><Assessments /></Router>);

    const alert = ReactTestUtils.findRenderedComponentWithType(component, Alert);
    expect(alert.props.children).toEqual([ "Hello ", "Sir Comference", "!  Welcome to Mneme." ]);
  });

  it("closes the alert when the close button is clicked", () => {
    const component = ReactTestUtils.renderIntoDocument(<Router><Assessments /></Router>);

    const alert = ReactTestUtils.scryRenderedComponentsWithType(component, Alert);
    expect(alert.length).toBe(1);
    alert[0].props.onDismiss();
    const alertClosed = ReactTestUtils.scryRenderedComponentsWithType(component, Alert);
    expect(alertClosed.length).toBe(0);
  });
});
