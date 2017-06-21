import React, { Component } from 'react';
import { string } from 'prop-types'
import TableActions from '../components/TableActions';
import TableCheckbox from '../components/TableCheckbox';
import IconButton from '../components/IconButton';
import { Table, Glyphicon } from 'react-bootstrap';
import API from '../services/API';

class AsmtsList extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  constructor(props) {
    super(props);

    this.state = {asmts: []};

    this.iconStyle = {textAlign: "center", width: 16};
    this.tableHeaders = ["", "", "Status", "Type", "Title", "Open", "Due", "AllowUntil", ""];
  }

  componentDidMount() {
    this.load();
  }

  componentWillUnmount() {
  }

  load() {
    fetch("/api/mneme/assessments" + API.tokensQuery())
      .then((response) => {return response.json();})
      .then((data) => {
        this.accept(data);
      });
  }

  accept(data) {
    data.forEach((asmt) => {
      // make real dates
      if ((asmt.open != null) && (!(asmt.open instanceof Date))) {
        asmt.open = new Date(asmt.open);
      }
      if ((asmt.due != null) && (!(asmt.due instanceof Date))) {
        asmt.due = new Date(asmt.due);
      }
      if ((asmt.until != null) && (!(asmt.until instanceof Date))) {
        asmt.until = new Date(asmt.until);
      }
    });

    // set the new state
    const newState = {asmts: data};
    this.setState(newState);
  }

  mockAsmts() {
    const asmts = [
      {
        id: 1,
        published: true,
        valid: true,
        type: "A",
        title: "First Test",
        open: 1497882740761,
        due: 1497882740761,
        until: null
      },
      {
        id: 2,
        published: true,
        valid: true,
        type: "A",
        title: "Second Test",
        open: new Date("July 11, 2017"),
        due: new Date("July 20, 2017"),
        until: null
      },
      {
        id: 3,
        published: false,
        valid: false,
        type: "A",
        title: "Last Test",
        open: new Date("July 21, 2017"),
        due: new Date("July 30, 2017"),
        until: null
      },
    ];
    return asmts;
  }

  date(d) {
    if ((d == null) || (!(d instanceof Date))) {
      return "";
    } else  {
      return d.toLocaleDateString();
    }
  }

  publishedIcon(asmt) {
    const red = {color: "rgb(0, 186, 0)"};
    const green = {color: "rgb(220, 0, 0)"};

    if (asmt.published) {
      return <Glyphicon glyph="ok-sign" title="published" style={green} />
    } else {
      return <Glyphicon glyph="minus-sign" title="unpublished" style={red} />
    }
  }

  invalidIcon(asmt) {
    const color = {color: "#ff8005"};

    if (!asmt.valid) {
      return <Glyphicon glyph="warning-sign" title="Invalid" style={color} />
    } else {
      return null;
    }
  }

  render() {
    const tdHeaders = this.tableHeaders.map((text, index) => <th key={index}>{text}</th>);

    const trItems = this.state.asmts.map((asmt) =>
      <tr key={asmt.id}>
        <TableCheckbox />
        <td style={this.iconStyle}>{this.invalidIcon(asmt)}</td>
        <td style={this.iconStyle}>{this.publishedIcon(asmt)}</td>
        <td>{asmt.type}</td>
        <td>{asmt.title}</td>
        <td>{this.date(asmt.open)}</td>
        <td>{this.date(asmt.due)}</td>
        <td>{this.date(asmt.until)}</td>
        <td>
          <IconButton glyph="cog" tip="Set Options" />
          <IconButton glyph="user" tip="Add Special Access" />
          <IconButton glyph="duplicate" tip="Duplicate Assessment" />
          <IconButton glyph="print" tip="Print" />
        </td>
      </tr>
    );

    return (
      <div>
        <TableActions />
        <Table striped condensed hover>
          <thead>
            <tr>
              {tdHeaders}
            </tr>
          </thead>
          <tbody>
            {trItems}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default AsmtsList;
