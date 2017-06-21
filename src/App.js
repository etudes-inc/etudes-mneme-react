import React, { Component } from 'react';
import Asmts from "./views/Asmts";
import SampleApp from "./views/SampleApp";
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/Asmts' component={Asmts} />
          <Route exact path='/Sample' component={SampleApp} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
