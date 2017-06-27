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
import { string, func } from 'prop-types'
import { Glyphicon } from 'react-bootstrap';

// A UI button rendered as a small icon
class IconButton extends Component {

  static propTypes = {
    glyph: string,              // bootstrap glyph to display
    text: string,               // text to display
    tip: string,                // tool tip to display when hovering
    href: string,               // location change for the button press
    onClick: func               // callback for the button press
  }

  static defaultProps = {
    glyph: "star",
    text: "",
    tip: "",
    href: null,
    onClick: null
  }

  render() {
    const spacing = {paddingLeft: 8, paddingRight: 8};

//   <a href><Glyphicon style={spacing} glyph="star" /> Add</a>
    return (
      <a  href={this.props.href}
          onClick ={this.props.onClick}
          style={spacing}
          title={this.props.tip}>
        <Glyphicon glyph={this.props.glyph} /> {this.props.text}
      </a>
    );
  }
}

export default IconButton;
