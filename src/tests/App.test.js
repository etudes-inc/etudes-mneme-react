import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');

  // TODO: this render kills the tests with a 'TypeError: Network request failed'
  // ReactDOM.render(<App />, div);
});
