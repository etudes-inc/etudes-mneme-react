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

import React, {Component} from 'react';
import Asmts from "./views/Asmts";
import EditAsmt from "./views/EditAsmt";
import SampleApp from "./views/SampleApp";
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/Asmts' component={Asmts} />
          <Route exact path='/EditAsmt/:id' component={EditAsmt} />
          <Route exact path='/Sample' component={SampleApp} />
          <Redirect exact from="/" to="/Asmts"/>
        </div>
      </Router>
    );
  }
}

export default App;
