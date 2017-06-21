import React, { Component } from 'react';

class TableCheckbox extends Component {
  render() {
    const narrow = {width: 16};

    return (
      <td style={narrow}><input type="checkbox" /></td>
    );
  }
}

export default TableCheckbox;
