import React, { Component } from 'react';

import { Route } from "react-router-dom";

import { Nav } from '../component/nav/nav'
import { Main } from '../component/main/main'
import { Communicate } from '../component/communicate/communicate'
import { Development } from '../component/development/development'

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Route exact path="/" component={Main}/>
        <Route exact path="/communicate" component={Communicate}/>
        <Route path="/development" component={Development}/>
      </div>
    );
  }
}
 
export default App;
