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
 AsmtsModes.js
 Mneme / React UI / Views / Management View / Assessments Modes View-Component

 The modes UI offering the different management modes in Mneme.
 */

import React, { Component } from 'react';
import { Nav, NavItem , Glyphicon } from 'react-bootstrap';

class AsmtsModes extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    // event.preventDefault();
    alert(`selected ${eventKey}`);
  }

  render() {
    const style={paddingBottom: 20};

    return (
      <div>
        <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
          <NavItem eventKey="1" title="Assessments"><Glyphicon glyph="glyphicon glyphicon-folder-open" /> Assessments</NavItem>
          <NavItem eventKey="2" title="Question Pools"><Glyphicon glyph="glyphicon glyphicon-briefcase" /> Question Pools</NavItem>
          <NavItem eventKey="3" title="Grading"><Glyphicon glyph="glyphicon glyphicon-pencil" /> Grading</NavItem>
          <NavItem eventKey="4" title="Test Drive"><Glyphicon glyph="glyphicon glyphicon-flash" /> Test Drive</NavItem>
        </Nav>
        <div style={style} />
      </div>
    );
  }
}

export default AsmtsModes;
