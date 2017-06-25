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
import { string } from 'prop-types'

// A footer with product and contact information
class Footer extends Component {

  static propTypes = {
    link: string,               // URL for <a> over text
    name: string,               // product name
    copyright: string,          // year string following @
    holder: string              // name of the copyright holder
  }

  static defaultProps = {
    link: "URL",
    name: "PRODUCT",
    copyright: "YEAR",
    holder: "PERSON"
  }

  render() {
    const style1 = {opacity: 0.9, fontSize: "85%"};
    const style2 = {marginTop: 15, marginLeft: 32, marginRight: 32};
    return (
      <div className="navbar navbar-default navbar-fixed-bottom" style={style1}>
        <div style={style2}>
          <a className="btn btn-link btn-xs pull-right" href={this.props.link} target="_blank">{this.props.name} &copy; {this.props.copyright} {this.props.holder}</a>
        </div>
      </div>
    );
  }
}

export default Footer;
