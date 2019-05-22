import React, { Component } from 'react';

import { Route } from "react-router-dom";

import { Nav } from '../component/nav/nav'
import { Main } from '../component/main/main'
import { Development } from '../component/development/development'

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Route exact path="/" component={Main}/>
        <Route path="/development" component={Development}/>
      </div>
    );
  }
}
 
export default App;
