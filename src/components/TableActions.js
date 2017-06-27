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

import React, { Component } from 'react';
import IconButton from '../components/IconButton';
import { Well } from 'react-bootstrap';

// A UI component showing a list of actions related to the table below
// TODO: sort of hard coded for now
class TableActions extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Well bsSize="small">
        <IconButton glyph="plus-sign" text="Add" href="/EditAsmt" />
        <IconButton glyph="remove-sign" text="Delete" />
        <IconButton glyph="ok-sign" text="Publish" />
        <IconButton glyph="minus-sign" text="Unpublish" />
        <IconButton glyph="open" text="Archive" />
        <IconButton glyph="save" text="Restore" />
        <IconButton glyph="import" text="Import" />
        <IconButton glyph="export" text="Export" />
        <IconButton glyph="cog" text="Set Options" />
      </Well>
    );
  }
}

export default TableActions;
