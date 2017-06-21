import React, { Component } from 'react';

class Block extends Component {
  render() {
    const style={marginTop: 20};

    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
}

export default Block;
