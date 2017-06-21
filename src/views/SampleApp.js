import React, { Component } from 'react';
import SampleHdr from "../views/SampleHdr";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Hello from '../components/Hello';
import { Grid, Row, Col, Button, Glyphicon } from 'react-bootstrap';
import API from '../services/API';
import { Link } from 'react-router-dom';

class SampleApp extends Component {
  constructor(props) {
    super(props);

    this.title = "This will someday be Mneme";

    this.state = {
      msg: "Working ...",
      count: 1
    };

    this.click = this.click.bind(this);
  }

  click() {
    this.setState(prevState => ({
      count: prevState.count+1
    }));
  }

  render() {
    const link = "/Asmts" + API.tokensQuery();

    return (
      <div>
        <SampleHdr />
        <Container>
          <Hello />
          <p>{this.title}</p>
          <p>{this.state.msg} {this.state.count}</p>
          <Grid>
            <Row>
              <Col sm={4}>
                <button onClick={this.click}>{this.state.count}</button>
              </Col>
              <Col sm={4}>
                <Button bsSize="small" onClick={this.click}><Glyphicon glyph="star" /> Star</Button>
              </Col>
              <Col sm={4}>
                <Button bsStyle="primary" onClick={this.click}>Default button {this.state.count}</Button>
              </Col>
            </Row>
          </Grid>
          <Link to={link}>Assessments</Link>
        </Container>
        <Footer name="Mneme" copyright="2017" holder="Etudes, Inc." link="https://github.com/etudes-inc/etudes-apps"/>
      </div>
    );
  }
}

export default SampleApp;
