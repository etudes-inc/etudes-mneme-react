import React, { Component } from 'react';
import IconButton from '../components/IconButton';
import { Glyphicon } from 'react-bootstrap';

class TableActions extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const spacing = {paddingLeft: 8, paddingRight: 8};
    return (
      <div>
        <IconButton glyph="plus-sign" text="Add" />
        <IconButton glyph="remove-sign" text="Delete" />
        <IconButton glyph="ok-sign" text="Publish" />
        <IconButton glyph="minus-sign" text="Unpublish" />
        <IconButton glyph="open" text="Archive" />
        <IconButton glyph="save" text="Restore" />
        <IconButton glyph="import" text="Import" />
        <IconButton glyph="export" text="Export" />
        <IconButton glyph="cog" text="Set Options" />
      </div>
    );
  }
}

export default TableActions;
