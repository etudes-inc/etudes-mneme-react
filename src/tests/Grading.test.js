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
import ReactTestUtils from "react-dom/test-utils";
import ShallowRenderer from "react-test-renderer/shallow";
import {MemoryRouter as Router} from "react-router-dom";
import {Label} from "react-bootstrap";
import Grading from "../views/Grading";

/*
Grading.test.js
test

Tests for the <Grading /> view (component).
*/

it("has a label identifying the view as 'Grading'", () => {
  const component = ReactTestUtils.renderIntoDocument(<Grading />);

  const label = ReactTestUtils.findRenderedComponentWithType(component, Label);
  expect(label.props.children).toEqual("Grading");
});
