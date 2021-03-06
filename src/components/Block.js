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

/*
Block.js
component

Provide a UI zone with some spacing.
*/

class Block extends Component {
  render() {
    let margin = 20;
    if (this.props.x !== undefined) {
      margin *= parseInt(this.props.x, 10);
    }
    const style=margin > 0 ? {marginTop: margin} : {marginBottom: -margin};

    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
}

export default Block;
