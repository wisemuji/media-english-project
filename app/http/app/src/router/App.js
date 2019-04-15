import React, { Component } from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";
import { browserHistory } from 'react-router';
import { Main } from '../component/index'

import { Nav } from '../component/nav/nav'
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
        {this.props.children}
      </div>
    );
  }
}
 
export default App;
