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
 Assessment.js
 service

 Support service for working with Assessments.
 */

class Assessment {
  static adjustAssessmentFromServer(asmt) {
    // make real dates from the schedule
    if ((asmt.schedule.open != null) && (!(asmt.schedule.open instanceof Date))) {
      asmt.schedule.open = new Date(asmt.schedule.open);
    }
    if ((asmt.schedule.due != null) && (!(asmt.schedule.due instanceof Date))) {
      asmt.schedule.due = new Date(asmt.schedule.due);
    }
    if ((asmt.schedule.until != null) && (!(asmt.schedule.until instanceof Date))) {
      asmt.schedule.until = new Date(asmt.schedule.until);
    }

    // title should be set
    if (asmt.title == null) {
      asmt.title = "";
    }

    // TODO: what else?
  }

  static newAssessment() {
    return {
      context: null,
      created: {date: null, userId: 0},
      id: 0,
      modified: {date:null, userId: 0},
      schedule: {archived: null, due: null, hideUntilOpen: false, open: null, until: null},
      status: {published: true, valid: true},
      subscription: 0,
      title: "",
      type: "test"
    };
  }
}

export default Assessment;
