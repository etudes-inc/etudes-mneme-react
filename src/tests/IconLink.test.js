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
import IconLink from "../components/IconLink";
import ShallowRenderer from "react-test-renderer/shallow";
import {Link} from 'react-router-dom';
import {Glyphicon} from 'react-bootstrap';

// tests for the <IconLink /> components

it("renders a Link when a route is defined", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<IconLink route="ROUTE" text="TEXT" />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe(Link);
  expect(result.props.to).toBe("ROUTE");
//  console.log(result);
});

it("renders a Link, when a route is defined, showing the glyph and text and tip", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<IconLink route="/route" glyph="minus-sign" text="Delete" tip="delete an item"/>);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe(Link);
  expect(result.props.to).toBe("/route");

  expect(result.props.title).toBe("delete an item");

  expect(result.props.children).toBeDefined();
  expect(result.props.children.type).toBe("span");
  expect(result.props.children.props.children).toBeDefined();
  expect(result.props.children.props.children.length).toBe(3);

  expect(result.props.children.props.children[0].type).toBe(Glyphicon);
  expect(result.props.children.props.children[0].props.glyph).toBe("minus-sign");

  expect(result.props.children.props.children[1]).toBe(" ");
  expect(result.props.children.props.children[2]).toBe("Delete");
});

it("renders a Span when a route is not defined", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<IconLink />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe("span");
});

it("renders a Span, when a route is not defined, showing the glyph and text and tip", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<IconLink glyph="plus-sign" text="Add" tip="add an item"/>);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe("span");

  expect(result.props.title).toBe("add an item");

  expect(result.props.children).toBeDefined();
  expect(result.props.children.type).toBe("span");
  expect(result.props.children.props.children).toBeDefined();
  expect(result.props.children.props.children.length).toBe(3);

  expect(result.props.children.props.children[0].type).toBe(Glyphicon);
  expect(result.props.children.props.children[0].props.glyph).toBe("plus-sign");

  expect(result.props.children.props.children[1]).toBe(" ");
  expect(result.props.children.props.children[2]).toBe("Add");
});
