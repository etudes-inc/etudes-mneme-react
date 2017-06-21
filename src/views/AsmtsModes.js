import React, { Component } from 'react';
import { string } from 'prop-types'
import { Nav, NavItem , Glyphicon } from 'react-bootstrap';

class AsmtsModes extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    // event.preventDefault();
    alert(`selected ${eventKey}`);
  }

  render() {
    const style={paddingBottom: 20};

    return (
      <div>
        <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
          <NavItem eventKey="1" title="Assessments"><Glyphicon glyph="glyphicon glyphicon-folder-open" /> Assessments</NavItem>
          <NavItem eventKey="2" title="Question Pools"><Glyphicon glyph="glyphicon glyphicon-briefcase" /> Question Pools</NavItem>
          <NavItem eventKey="3" title="Grading"><Glyphicon glyph="glyphicon glyphicon-pencil" /> Grading</NavItem>
          <NavItem eventKey="4" title="Test Drive"><Glyphicon glyph="glyphicon glyphicon-flash" /> Test Drive</NavItem>
        </Nav>
        <div style={style} />
      </div>
    );
  }
}

export default AsmtsModes;
