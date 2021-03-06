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

import React, {Component} from 'react';
import {string} from 'prop-types'
import {Glyphicon} from 'react-bootstrap';
import {Link} from 'react-router-dom';

/*
IconLink.js
component

A UI Link rendered as a small icon.
*/

class IconLink extends Component {

  static propTypes = {
    glyph: string,              // bootstrap glyph to display
    text: string,               // text to display
    tip: string,                // tool tip to display when hovering
    route: string               // location for the link
  }

  static defaultProps = {
    glyph: "star",
    text: "",
    tip: "",
    route: undefined
  }

  render() {
    const spacing = {paddingLeft: 8, paddingRight: 8};
    const buttonAndText = <span><Glyphicon glyph={this.props.glyph} /> {this.props.text}</span>;

    return (this.props.route === undefined) ? (
      <span style={spacing} title={this.props.tip}>{buttonAndText}</span>
    ) : (
      <Link to={this.props.route} style={spacing} title={this.props.tip}>{buttonAndText}</Link>
    );
  }
}

export default IconLink;
