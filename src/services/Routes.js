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
 Routes.js
 service

 Source of truth for in-app routes
 usage: new Routes().to("editAssessment").id(0).path();
 usage: new Routes("editAssessment",0).path();
 for defining the path: new Routes().to("editAssessment").def();
 */

class Routes {

  constructor(toParam, idParam) {
    this.params = {to:"", id:":id"};
    if (toParam !== undefined) {
      this.params.to = toParam;
    }
    if (idParam !== undefined) {
      this.params.id = idParam;
    }
  }

  to(toParam) {
    this.params.to = toParam;
    return this;
  }

  id(idParam) {
    this.params.id = idParam;
    return this;
  }

  def() {
    const routes = {
      assessmentsHub: "/assessments",
      submissionsHub: "/submissions",
      assessments: "/assessments",
      submissions: "/submissions",
      editAssessment: `/assessments/${this.params.id}/edit`
    }

    return routes[this.params.to];
  }

  path() {
    return this.def() + API.tokensQuery();
  }
}

export default Routes;
