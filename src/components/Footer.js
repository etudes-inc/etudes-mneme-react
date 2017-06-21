import React, { Component } from 'react';
import { string } from 'prop-types'

class Footer extends Component {

  static propTypes = {
    link: string,               // URL for <a> over text
    name: string,               // product name
    copyright: string,          // year string following @
    holder: string              // name of the copyright holder
  }

  static defaultProps = {
    link: "URL",
    name: "PRODUCT",
    copyright: "YEAR",
    holder: "PERSON"
  }

  render() {
    const style1 = {opacity: 0.9, fontSize: "85%"};
    const style2 = {marginTop: 15, marginLeft: 32, marginRight: 32};
    return (
      <div className="navbar navbar-default navbar-fixed-bottom" style={style1}>
        <div style={style2}>
          <a className="btn btn-link btn-xs pull-right" href={this.props.link} target="_blank">{this.props.name} &copy; {this.props.copyright} {this.props.holder}</a>
        </div>
      </div>
    );
  }
}

export default Footer;
