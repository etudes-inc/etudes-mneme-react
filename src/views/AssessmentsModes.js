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

 /*
 AssessmentsModes.js
 Mneme / React UI / Views / Management View / Assessments Modes View-Component

 The modes UI offering the different management modes in Mneme.
 */

import React, { Component } from "react";
import { Nav, NavItem , Glyphicon } from "react-bootstrap";
import Block from "../components/Block";
import Routes from "../services/Routes";

class AssessmentsModes extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  constructor(props) {
    super(props);

    this.state = {active: 0};

    this.modes = [
      {title: "Assessments", icon: "folder-open", route: Routes.assessments},
      {title: "Question Pools", icon: "briefcase", route: Routes.assessments},
      {title: "Grading", icon: "pencil", route: Routes.assessments},
      {title: "Test Drive", icon: "flash", route: Routes.assessments}
    ];

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    const newState = {active: eventKey};
    this.setState(newState);

    this.props.history.push(new Routes().to(this.modes[eventKey].route).path());
  }

  render() {

    let navItems = [];
    for(let i = 0; i < this.modes.length; i++) {
      navItems.push(<NavItem key={i} eventKey={i} title={this.modes[i].title}><Glyphicon glyph={this.modes[i].icon} />{" " + this.modes[i].title}</NavItem>);
    }

    return (
      <Block x={-1}>
        <Nav bsStyle="tabs" activeKey={this.state.active} onSelect={this.handleSelect}>
          {navItems}
        </Nav>
      </Block>
    );
  }
}

export default AssessmentsModes;
