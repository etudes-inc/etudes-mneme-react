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

import React from "react";
//import ReactDOM from "react-dom";
import ShallowRenderer from "react-test-renderer/shallow";
import { Alert } from "react-bootstrap";
import Block from "../components/Block";
import Assessments from "../views/Assessments";
import AssessmentsList from "../views/AssessmentsList";
import ReactTestUtils from "react-dom/test-utils";
import {MemoryRouter as Router} from "react-router-dom";

// tests for the <Assessments /> view (component)

it("has has div containing a block holding an AssessmentsList", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Assessments />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe("div");
  expect(result.props.children).toBeDefined();
  expect(result.props.children).toContainEqual(<Block><AssessmentsList /></Block>);
});

// temp feature - will eventually contain only one
it("has a div containing 3 elements", () => {
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

// http://engineering.pivotal.io/post/stub-dont-shallow-render-your-child-components/
describe("Testing", function(){

  const stubComponentP = function(componentClass) {
    var originalPropTypes;

    beforeEach(function() {
      originalPropTypes = componentClass.propTypes;

      componentClass.propTypes = {};

      spyOn(componentClass.prototype, 'render').and.returnValue(null);
      spyOn(componentClass.prototype, 'componentWillMount').and.returnValue(null);
      spyOn(componentClass.prototype, 'componentDidMount').and.returnValue(null);
      spyOn(componentClass.prototype, 'componentWillReceiveProps').and.returnValue(null);
      spyOn(componentClass.prototype, 'shouldComponentUpdate').and.returnValue(null);
      spyOn(componentClass.prototype, 'componentWillUpdate').and.returnValue(null);
      spyOn(componentClass.prototype, 'componentDidUpdate').and.returnValue(null);
      spyOn(componentClass.prototype, 'componentWillUnmount').and.returnValue(null);
    });

    afterEach(function() {
      componentClass.propTypes = originalPropTypes;
    });
  };

  var _ = require('lodash');

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

  const stubComponent = function(componentClass) {
    beforeEach(function() {
      _.each(lifecycleMethods, function(method) {
        if(typeof componentClass.prototype[method] !== 'undefined') {
          spyOn(componentClass.prototype, method).and.returnValue(null);
        }
      });
    });
  };

  stubComponent(Assessments);

  // temp feature - will eventually contain only one
  it("testing ...", () => {

    const component = ReactTestUtils.renderIntoDocument(<Router><Assessments /></Router>);
    console.log(component);
    const childComponent = ReactTestUtils.findRenderedComponentWithType(component, Assessments);
    console.log(childComponent);
  });
});
