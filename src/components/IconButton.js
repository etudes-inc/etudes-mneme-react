import React, { Component } from 'react';
import { string } from 'prop-types'
import { Glyphicon } from 'react-bootstrap';

class IconButton extends Component {

  static propTypes = {
    glyph: string,              // bootstrap glyph to display
    text: string,               // text to display
    tip: string                 // tool tip to display when hovering
  }

  static defaultProps = {
    glyph: "star",
    text: "",
    tip: ""
  }

  render() {
    const spacing = {paddingLeft: 8, paddingRight: 8};

//   <a href><Glyphicon style={spacing} glyph="star" /> Add</a>
    return (
      <a href style={spacing} title={this.props.tip}><Glyphicon glyph={this.props.glyph} /> {this.props.text}</a>
    );
  }
}

export default IconButton;
