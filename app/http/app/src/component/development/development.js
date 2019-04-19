import React, { Component } from 'react'
import './development.css'
import { Link, Route } from 'react-router-dom';
import { Journal } from './journal';

export const Development = ({match})=> {
    return (
        <div id="development">
            <ul className="cartegory">
                <li><Link to={`${match.url}/1`}>📋&nbsp;Week #1</Link></li>
                <li><Link to={`${match.url}/2`}>📋&nbsp;Week #2</Link></li>
                <li><Link to={`${match.url}/3`}>📋&nbsp;Week #3</Link></li>
                <li><Link to={`${match.url}/4`}>📋&nbsp;Week #4</Link></li>
            </ul>
            <div className="journals">
                <Route exact path={match.url} component={Journal}/>
                <Route path={`${match.url}/:id`} component={Journal}/>
            </div>
        </div>
    )
}