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
import {Nav, NavItem, Glyphicon} from "react-bootstrap";
import AssessmentsModes from "../views/AssessmentsModes";
import Block from "../components/Block";

/*
AssessmentsModes.test.js
test

Tests for the <AssessmentsModes /> view (component).
*/

it("has a Bootstrap Nav with a 'tabs' style", () => {
  const tree = ReactTestUtils.renderIntoDocument(<AssessmentsModes />);
  const nav = ReactTestUtils.findRenderedComponentWithType(tree, Nav);
  expect(nav.props.bsStyle).toBe("tabs");
});

it("has a 4 NavItems, with these names (and title property) then icons, in order", () => {
  const tree = ReactTestUtils.renderIntoDocument(<AssessmentsModes />);
  const nav = ReactTestUtils.scryRenderedComponentsWithType(tree, NavItem);
  expect(nav.length).toBe(4);

  const navs = [
    {title: "Assessments", icon: "folder-open"},
    {title: "Question Pools", icon: "briefcase"},
    {title: "Grading", icon: "pencil"},
    {title: "Test Drive", icon: "flash"}];
  navs.forEach((n, index) => {
    expect(nav[index].props.title).toBe(n.title);
    expect(ReactTestUtils.findRenderedComponentWithType(nav[index], Glyphicon).props.glyph).toBe(n.icon);
    expect(nav[index].props.children[1]).toBe(" " + n.title);
  });
});

it("is wrapped in a bottom margin block", () => {
  const tree = ReactTestUtils.renderIntoDocument(<AssessmentsModes />);
  const block = ReactTestUtils.findRenderedComponentWithType(tree, Block);
  expect(block.props.x).toBe(-1);
  const nav =  ReactTestUtils.findRenderedComponentWithType(block, Nav);
});

it("start with NavItem 1, and changes to each other active tab when the tab is clicked, and browser history is changed", () => {
  // Note: the history.push is not set while testing, so we add the function
  let path = "";
  const history = {push: to => path=to};

  const tree = ReactTestUtils.renderIntoDocument(<AssessmentsModes history={history}/>);
  let nav = ReactTestUtils.findRenderedComponentWithType(tree, Nav);
  expect(nav.props.onSelect).toBeDefined();
  expect(nav.props.activeKey).toBe("1");

  nav.props.onSelect("1");
  nav = ReactTestUtils.findRenderedComponentWithType(tree, Nav);
  expect(nav.props.activeKey).toBe("1");
  expect(path).toBe("/sample/1");

  nav.props.onSelect("2");
  nav = ReactTestUtils.findRenderedComponentWithType(tree, Nav);
  expect(nav.props.activeKey).toBe("2");
  expect(path).toBe("/sample/2");

  nav.props.onSelect("3");
  nav = ReactTestUtils.findRenderedComponentWithType(tree, Nav);
  expect(nav.props.activeKey).toBe("3");
  expect(path).toBe("/sample/3");

  nav.props.onSelect("4");
  nav = ReactTestUtils.findRenderedComponentWithType(tree, Nav);
  expect(nav.props.activeKey).toBe("4");
  expect(path).toBe("/sample/4");

  nav.props.onSelect("1");
  nav = ReactTestUtils.findRenderedComponentWithType(tree, Nav);
  expect(nav.props.activeKey).toBe("1");
  expect(path).toBe("/sample/1");
});
