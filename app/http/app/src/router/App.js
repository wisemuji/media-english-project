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
        <Router>
          <Route exact path = "/" component = {Main}/>
          <Route path = "/content" component = {Content} />
          <Route path = "/introduction" component = {Introduction} />
          <Route path = "/reviews" component = {Reviews} />
          <Route path = "/communicate" component = {Communicate} />
          <Route path = "/development" component = {Development} />
        </Router>
      </div>
    );
  }
}
 
export default App;
