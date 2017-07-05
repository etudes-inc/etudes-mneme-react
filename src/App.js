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
 App.js
 Mneme / React UI / App

 The main management app for Mneme, with the router.
 */

import React, {Component} from "react";
import Assessments from "./views/Assessments";
import AssessmentsModes from "./views/AssessmentsModes";
import EditAsmt from "./views/EditAsmt";
import Pools from "./views/Pools";
import Grading from "./views/Grading";
import TestDrive from "./views/TestDrive";
import SampleApp from "./views/SampleApp";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Routes from "./services/Routes";
import Container from "./components/Container";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    const assessmentsRoute = new Routes().to(Routes.assessments).def();
    const editRoute = new Routes().to(Routes.editAssessment).def();
    const submissionsRoute = new Routes().to(Routes.submissions).def();
    const assessmentsBaseRoute = new Routes().to(Routes.assessmentsHub).def();
    const poolsRoute = new Routes().to(Routes.pools).def();
    const gradingRoute = new Routes().to(Routes.grading).def();
    const testDriveRoute = new Routes().to(Routes.testDrive).def();

    return (
      <Router>
        <Container>
          <Route path={assessmentsBaseRoute} component={AssessmentsModes} />
          <Switch>
            <Route exact path={assessmentsRoute} component={Assessments} />
            <Route exact path={editRoute} component={EditAsmt} />
            <Route exact path={editRoute} component={EditAsmt} />
            <Route exact path={poolsRoute} component={Pools} />
            <Route exact path={gradingRoute} component={Grading} />
            <Route exact path={testDriveRoute} component={TestDrive} />
            <Route exact path="/sample/:msg" component={SampleApp} />
            <Redirect exact from={submissionsRoute} to="/sample/submissions"/>
            <Redirect exact from="/" to={assessmentsRoute}/>
          </Switch>
          <Footer name="Mneme" copyright="2017" holder="Etudes, Inc." link="https://github.com/etudes-inc/etudes-apps"/>
        </Container>
      </Router>
    );
  }
}

export default App;
