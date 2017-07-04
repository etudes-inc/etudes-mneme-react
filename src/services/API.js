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
 API.js
 service

 Support service for forming fetch URLs to REST with the server.
 */

class API {
  static getParameterByName(name) {
    const match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  }

  static cacheBustingParameters() {
    // add this to bust browser caching - will change quite often
    return "?v=" + new Date().getTime();
  }

  static tokensQuery() {
    // TODO: not sure we need cache busting
    let rv = this.cacheBustingParameters();

    const a = this.getParameterByName("a");
    const b = this.getParameterByName("b");
    if (a != null) {
      rv += "&a=" + a;
    }
    if (b != null) {
      rv += "&b=" + b;
    }

    return rv;
  }
}

export default API;
