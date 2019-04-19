import React, { Component } from 'react'
import './development.css'
import { NavLink, Route } from 'react-router-dom';
import { Journal } from './journal';

export const Development = ({match})=> {
    const activeStyle = {
        backgroundColor: '#c7c5c7',
        fontWeight: 'bold'
    };
    return (
        <div id="development">
            <ul className="cartegory">
                <NavLink to={`${match.url}/1`} activeStyle={activeStyle}><li>📋&nbsp;Week #1</li></NavLink>
                <NavLink to={`${match.url}/2`} activeStyle={activeStyle}><li>📋&nbsp;Week #2</li></NavLink>
                <NavLink to={`${match.url}/3`} activeStyle={activeStyle}><li>📋&nbsp;Week #3</li></NavLink>
                <NavLink to={`${match.url}/4`} activeStyle={activeStyle}><li>📋&nbsp;Week #4</li></NavLink>
            </ul>
            <div className="journals">
                <Route exact path={match.url} component={Journal}/>
                <Route path={`${match.url}/:id`} component={Journal}/>
            </div>
        </div>
    )
}