import React, { Component } from 'react';
import { string } from 'prop-types'
import { Alert } from 'react-bootstrap';
import Container from '../components/Container';
import Block from '../components/Block';
import Footer from '../components/Footer';
import AsmtsModes from '../views/AsmtsModes';
import AsmtsList from '../views/AsmtsList';
import API from '../services/API';
import { Link } from 'react-router-dom';

// Mneme Manage Assessments View
class Asmts extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  constructor(props) {
    super(props);

    this.state = {auth: {name: ""}, alertVisible: true};

    this.closeAlert = this.closeAlert.bind(this);
  }

  componentDidMount() {
    // load the latest list of assessments
    this.load();
  }

  componentWillUnmount() {
  }

  load() {
    fetch("/api/auth/info" + API.tokensQuery())
      .then((response) => {return response.json();})
      .then((data) => {
        const name = [data.givenName, data.familyName].join(" ");
        const newState = {auth: {name: name}};
        this.setState(newState);
      });
  }

  closeAlert() {
    const newState = {alertVisible: false};
    this.setState(newState);
  }

  render() {
    const alert = this.state.alertVisible ? (
      <Alert bsStyle="info" onDismiss={this.closeAlert}>
        Hello {this.state.auth.name}!  Welcome to Mneme.
      </Alert>
    ) : null;

    const link = "/Sample" + API.tokensQuery();

    return (
      <div>
        <Container>
          {alert}
          <Block><AsmtsModes /></Block>
          <Block><AsmtsList /></Block>
          <Link to={link}>Sample</Link>
        </Container>
        <Footer name="Mneme" copyright="2017" holder="Etudes, Inc." link="https://github.com/etudes-inc/etudes-apps"/>
      </div>
    );
  }
}

export default Asmts;
