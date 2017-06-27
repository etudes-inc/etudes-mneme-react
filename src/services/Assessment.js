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

// Support service for working with Assessments
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

    // TODO: what else?
  }

  static newAssessment() {
    return {
      id: 0,
      title: "",
      type: "T"
    };
  }
}

export default Assessment;
