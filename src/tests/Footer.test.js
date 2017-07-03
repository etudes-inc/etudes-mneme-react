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
import Footer from "../components/Footer";
import ShallowRenderer from "react-test-renderer/shallow";

// tests for the <Footer /> components

it("adds a div fixed to the bottom of the page, using Bootstrap's navbar components", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Footer />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe("div");
  expect(result.props.className).toEqual(expect.stringContaining("navbar"));
  expect(result.props.className).toEqual(expect.stringContaining("navbar-fixed-bottom"));
});

it("adds a div giving some white space to the navbar", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Footer />);
  const result = renderer.getRenderOutput();

  expect(result.props.children).toBeDefined();
  expect(result.props.children.type).toBe("div");

  expect(result.props.children.props.style.marginTop).toBeDefined();
  expect(result.props.children.props.style.marginLeft).toBeDefined();
  expect(result.props.children.props.style.marginRight).toBeDefined();
});


it("adds has a link in the navbar, opening a new page to the default url, showing the default wording", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Footer />);
  const result = renderer.getRenderOutput();

  expect(result.props.children).toBeDefined();
  expect(result.props.children.props.children).toBeDefined();
  expect(result.props.children.props.children.type).toBe("a");
  expect(result.props.children.props.children.props.href).toBe("URL");
  expect(result.props.children.props.children.props.target).toBe("_blank");
  expect(result.props.children.props.children.props.children).toEqual([ 'PRODUCT', ' © ', 'YEAR', ' ', 'PERSON' ]);
});

it("shows paramaterized product, year and person, with the parameterized url, in the link", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Footer name="Mneme" copyright="2017" holder="Etudes, Inc." link="https://github.com/etudes-inc/etudes-apps"/>);
  const result = renderer.getRenderOutput();

  expect(result.props.children).toBeDefined();
  expect(result.props.children.props.children).toBeDefined();
  expect(result.props.children.props.children.type).toBe("a");
  expect(result.props.children.props.children.props.href).toBe("https://github.com/etudes-inc/etudes-apps");
  expect(result.props.children.props.children.props.target).toBe("_blank");
  expect(result.props.children.props.children.props.children).toEqual([ 'Mneme', ' © ', '2017', ' ', 'Etudes, Inc.' ]);
});
