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
Asmts.js
Mneme / React UI / Views / Management View / Assessments View

The main, list of assessments view, for instructors and other assessment managers.
*/

import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Block from '../components/Block';
import AssessmentsList from '../views/AssessmentsList';
import API from '../services/API';
import Authentication from '../services/Authentication';

class Assessments extends Component {

  // No props
  static propTypes = {
  }

  static defaultProps = {
  }

  constructor(props) {
    super(props);
    // console.log("Assessments.constructor");

    // state related to the TEMP welcome alert feature
    this.state = {auth: {name: "User", context: "context", placement: "placement"}, alertVisible: true};

    this.closeAlert = this.closeAlert.bind(this);
  }

  componentDidMount() {
    // load the authentication information
    this.load();
    // console.log("Assessments.componentDidMount");
  }

  componentWillUnmount() {
    // console.log("Assessments.componentWillUnmount");
  }

  // load the authentication information
  load() {
    Authentication.info(data => {
      // update the state with the user name from the authentication
      const name = [data.givenName, data.familyName].join(" ");
      const newState = {auth: {name: name, context: data.context, placement: data.placement}};
      this.setState(newState);
    });
  }

  // to close the welcome alert
  closeAlert() {
    // update the state to indicate no alert
    const newState = {alertVisible: false};
    this.setState(newState);
  }

  render() {
    // a TEMP feature to demonstrate authentication info - showing a welcome alert
    const alert = this.state.alertVisible ? (
      <Alert bsStyle="info" onDismiss={this.closeAlert}>
        Hello {this.state.auth.name}!  Welcome to Mneme in context {this.state.auth.context}, placement {this.state.auth.placement}.
      </Alert>
    ) : null;

    // a TEMP feature to show routing
    const link = "/sample/boo" + API.tokensQuery();

    return (
      <div>
        {alert}
        <Block><AssessmentsList /></Block>
        <Link to={link}>Sample</Link>
      </div>
    );
  }
}

export default Assessments;
