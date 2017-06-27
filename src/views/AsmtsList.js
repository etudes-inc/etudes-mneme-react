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
AsmtsList.js
Mneme / React UI / Views / Management View / Assessments List View-Component

A list of assessments component, with management features.
*/

import React, { Component } from 'react';
import TableActions from '../components/TableActions';
import TableCheckbox from '../components/TableCheckbox';
import IconButton from '../components/IconButton';
import { Table, Glyphicon } from 'react-bootstrap';
import API from '../services/API';

class AsmtsList extends Component {

  // No properties
  static propTypes = {
  }

  static defaultProps = {
  }

  constructor(props) {
    super(props);

    // we keep a list of assessments in state
    this.state = {asmts: []};

    // some constants
    this.iconStyle = {textAlign: "center", width: 16};
    this.tableHeaders = ["", "", "Status", "Type", "Title", "Open", "Due", "AllowUntil", ""];
  }

  componentDidMount() {
    // load our assessments
    this.load();
  }

  componentWillUnmount() {
  }

  // load assessments for the context associated with the current authentication
  // TODO: we might not want to load in here, but instead, pass in via props
  load() {
    fetch("/api/mneme/assessments" + API.tokensQuery())
      .then((response) => {return response.json();})
      .then((data) => {
        this.accept(data);
      });
  }

  // accept data from the server, assuring we have good formats (dates)
  accept(data) {
    data.forEach((asmt) => {
      // make real dates from the schedule
      if ((asmt.schedule.open != null) && (!(asmt.schedule.open instanceof Date))) {
        asmt.schedule.open = new Date(asmt.schedule.open);
      }
      if ((asmt.schedule.due != null) && (!(asmt.schedule.due instanceof Date))) {
        asmt.schedule.due = new Date(asmt.schedule.due);
      }
      if ((asmt.schedule.until != null) && (!(asmt.schedule.until instanceof Date))) {
        asmt.schedule.until = new Date(asmt.schedule.until);
      }

      // TODO: what else?
    });

    // set the new state
    const newState = {asmts: data};
    this.setState(newState);
  }

  // make a display string from a n (alleged) date
  date(d) {
    if ((d == null) || (!(d instanceof Date))) {
      return "";
    } else  {
      return d.toLocaleDateString();
    }
  }

  // make a display to show the published status, as a colored icon
  publishedIcon(asmt) {
    const green  = {color: "rgb(0, 186, 0)"};
    const red = {color: "rgb(220, 0, 0)"};

    if (asmt.status.published) {
      return <Glyphicon glyph="ok-sign" title="published" style={green} />
    } else {
      return <Glyphicon glyph="minus-sign" title="unpublished" style={red} />
    }
  }

  // make a display to show the invalid setting, as a colored icon
  invalidIcon(asmt) {
    const color = {color: "#ff8005"};

    if (!asmt.status.valid) {
      return <Glyphicon glyph="warning-sign" title="Invalid" style={color} />
    } else {
      return null;
    }
  }

  render() {
    const tdHeaders = this.tableHeaders.map((text, index) => <th key={index}>{text}</th>);

    const trItems = this.state.asmts.map((asmt) =>
      <tr key={asmt.id}>
        <TableCheckbox />
        <td style={this.iconStyle}>{this.invalidIcon(asmt)}</td>
        <td style={this.iconStyle}>{this.publishedIcon(asmt)}</td>
        <td>{asmt.type}</td>
        <td>{asmt.title}</td>
        <td>{this.date(asmt.schedule.open)}</td>
        <td>{this.date(asmt.schedule.due)}</td>
        <td>{this.date(asmt.schedule.until)}</td>
        <td>
          <IconButton glyph="cog" tip="Set Options" />
          <IconButton glyph="user" tip="Add Special Access" />
          <IconButton glyph="duplicate" tip="Duplicate Assessment" />
          <IconButton glyph="print" tip="Print" />
        </td>
      </tr>
    );

    return (
      <div>
        <TableActions />
        <Table striped condensed hover>
          <thead>
            <tr>
              {tdHeaders}
            </tr>
          </thead>
          <tbody>
            {trItems}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default AsmtsList;
