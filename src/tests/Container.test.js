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
import ReactDOM from "react-dom";
import Container from "../components/Container";
import ShallowRenderer from "react-test-renderer/shallow";

/*
Container.test.js
test

Tests for the <Container /> components.
*/

it("adds a div wrapper with Bootstrap's container-fluid class", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Container />);
  const result = renderer.getRenderOutput();

  // a Block should wrap the children in a div with some top margin
  expect(result.type).toBe("div");
  expect(result.props.className).toBeDefined();
  expect(result.props.className).toBe("container-fluid");
});

it("adds a div with Bootstrap's container-fluid class to its single child", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Container><p /></Container>);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe("div");
  expect(result.props.children).toBeDefined();
  expect(result.props.children.type).toBe("p");
});

it("adds a div wrapper with Bootstrap's container-fluid class to its multiple children", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Container><p /><span /><div /></Container>);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe("div");
  expect(result.props.children).toBeDefined();
  expect(result.props.children.length).toBe(3);
  expect(result.props.children[0].type).toBe("p");
  expect(result.props.children[1].type).toBe("span");
  expect(result.props.children[2].type).toBe("div");
});
