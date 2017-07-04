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

import API from "../services/API";

/*
Assessment.js
service

Access to the authentication information on the server.
*/

class Authentication {

  // fetch the authentication information - returns a promise .then(authentication) => {}
  // Prefer the callback version, since that is (more?) mockable for tests
  // static info() {
  //   return fetch("/api/auth/info" + API.tokensQuery())
  //     .then((response) => {return response.json();});
  // }

  // fetch the authentication information - calls back with the data
  static info(callback) {
    return fetch("/api/auth/info" + API.tokensQuery())
      .then((response) => {return response.json();})
      .then((data) => {callback(data);});
  }
}

export default Authentication;
