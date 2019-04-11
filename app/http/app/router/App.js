import React, { Component } from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";

import { Main } from '../src/component/index'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path = "/" component = {Main}/>
        </div>
      </Router>
    );
  }
}

export default App;
