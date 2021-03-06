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

import React, { Component } from "react";
import IconLink from "../components/IconLink";
import { Well } from "react-bootstrap";
import Routes from "../services/Routes";

/*
TableActions.js
component

A UI component showing a list of actions related to the table below.

TODO: sort of hard coded for now
*/

class TableActions extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const addRoute = new Routes("editAssessment", 0).path();

    return (
      <Well bsSize="small">
        <IconLink glyph="plus-sign" text="Add" tip="Add Assessment" route={addRoute}/>
        <IconLink glyph="remove-sign" text="Delete" />
        <IconLink glyph="ok-sign" text="Publish" />
        <IconLink glyph="minus-sign" text="Unpublish" />
        <IconLink glyph="open" text="Archive" />
        <IconLink glyph="save" text="Restore" />
        <IconLink glyph="import" text="Import" />
        <IconLink glyph="export" text="Export" />
        <IconLink glyph="cog" text="Set Options" />
      </Well>
    );
  }
}

export default TableActions;
