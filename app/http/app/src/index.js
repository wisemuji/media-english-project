import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './client/Root';
import App from './router/App';
import * as serviceWorker from './serviceWorker';

// import { Content } from './component/content/content'
// import { Introduction } from './component/introduction/introduction'
// import { Reviews } from './component/reviews/reviews'
import { Main } from './component/main/main'
import { Communicate } from './component/communicate/communicate'
import { Development } from './component/development/development'
import { Journal } from './component/development/journal'

ReactDOM.render(<Root/>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
