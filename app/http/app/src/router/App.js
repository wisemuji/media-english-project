import React, { Component } from 'react';

import { Route } from "react-router-dom";

import { Nav } from '../component/nav/nav'
import { Main } from '../component/main/main'
import { Content } from '../component/content/content'
import { Introduction } from '../component/introduction/introduction'
import { Reviews } from '../component/reviews/reviews'
import { Communicate } from '../component/communicate/communicate'
import { Development } from '../component/development/development'

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Route exact path="/" component={Main}/>
        <Route exact path="/communicate" component={Communicate}/>
        <Route exact path="/development" component={Development}/>
        {/* {this.props.children} */}
      </div>
    );
  }
}
 
export default App;
