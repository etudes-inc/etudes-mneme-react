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
EditAsmt.js
Mneme / React UI / Views / Management View / Edit Assessment View

Edit an assessment.
*/

import React, { Component } from 'react';
import { Well, Alert, Label, FormGroup, ControlLabel, FormControl, Radio, Checkbox } from 'react-bootstrap';
import Container from '../components/Container';
import Block from '../components/Block';
import Footer from '../components/Footer';
import AsmtsModes from '../views/AsmtsModes';
import IconButton from '../components/IconButton';
import API from '../services/API';
// import { Link } from 'react-router-dom';

class EditAsmt extends Component {

  // No props
  static propTypes = {
  }

  static defaultProps = {
  }

  constructor(props) {
    super(props);

    // TODO: proper asmt to edit in state
    this.state = {asmt: {title:"", type:"T"}};

    // this.handleNav = this.handleNav.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  // see: https://github.com/ReactTraining/history

  // handleNav(eventKey) {
  //   switch (eventKey) {
  //     case 1:
  //       this.handleDone();
  //       break;
  //     case 2:
  //       this.handleSave();
  //       break;
  //     default:
  //       alert(`unknown`);
  //       break;
  //   }
  // }

  handleDone() {
    // link back to the assessments main view
    const link = "/Asmts" + API.tokensQuery();

    this.props.history.push(link);
    // this.props.history.goBack();
  }

  handleSave() {
    alert(`saved: ${this.state.asmt.title} ${this.state.asmt.type}`);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState((prevState, props) => {
      prevState.asmt[name] = value;
      return prevState;
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Block><AsmtsModes /></Block>
          <h2><Label>Edit Assessment</Label></h2>
          <Block>
            <form>
              <FormGroup>
                <ControlLabel>Type</ControlLabel>
                <Radio name="type" value="T" checked={this.state.asmt.type==="T"}
                    onChange={this.handleChange}>
                  Test
                </Radio>
                <Radio name="type" value="A" checked={this.state.asmt.type==="A"}
                    onChange={this.handleChange}>
                  Assignment
                </Radio>
                <Radio name="type" value="S" checked={this.state.asmt.type==="S"}
                    onChange={this.handleChange}>
                  Survey
                </Radio>
                <Radio name="type" value="O" checked={this.state.asmt.type==="O"}
                    onChange={this.handleChange}>
                  Online
                </Radio>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Title</ControlLabel>
                <FormControl type="text" placeholder="Title"
                    value={this.state.asmt.title}
                    name="title" onChange={this.handleChange} />
              </FormGroup>
              <Checkbox>
                This is for points
              </Checkbox>
              <div><IconButton glyph="check" text="Edit Instructions" onClick={this.handleDone} /></div>
              <div><IconButton glyph="check" text="Manage Parts" onClick={this.handleDone} /></div>
              <div><IconButton glyph="cog" text="Set Options" onClick={this.handleDone} /></div>
              <Block>
                <ControlLabel>Questions</ControlLabel>
                <Well bsSize="small">
                  <IconButton glyph="check" text="Add" onClick={this.handleDone} />
                  <IconButton glyph="floppy-save" text="Select" onClick={this.handleSave} />
                  <IconButton glyph="floppy-save" text="Draw" onClick={this.handleSave} />
                  <IconButton glyph="floppy-save" text="Move" onClick={this.handleSave} />
                  <IconButton glyph="floppy-save" text="Remove" onClick={this.handleSave} />
                </Well>
                <Alert bsStyle="info">
                  No Questions
                </Alert>
              </Block>
            </form>
          </Block>
          <Block x="5">
            <Well bsSize="small" >
              <IconButton glyph="check" text="Done" onClick={this.handleDone} />
              <IconButton glyph="floppy-save" text="Save" onClick={this.handleSave} />
            </Well>
          </Block>
        </Container>
        <Footer name="Mneme" copyright="2017" holder="Etudes, Inc." link="https://github.com/etudes-inc/etudes-apps"/>
      </div>
    );
  }
}

// <Link to={link}>Done</Link>
// <Well>
//   <Nav bsStyle="pills" activeKey={1} onSelect={this.handleNav}>
//     <NavItem bsSize="small" eventKey={1} title="Done" href={link}>Done</NavItem>
//     <NavItem bsSize="small" eventKey={2} title="Save">Save</NavItem>
//   </Nav>
// </Well>

export default EditAsmt;
