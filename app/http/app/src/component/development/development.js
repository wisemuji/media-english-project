import React, { Component } from 'react'
import './development.css'
import { Link, Route } from 'react-router-dom';
import { Journal } from './journal';

export const Development = ({match})=> {
    return (
        <div id="development">
            <div className="journals">
                <ul>
                    <li><Link to={`${match.url}/1`}>Post #1</Link></li>
                    <li><Link to={`${match.url}/2`}>Post #2</Link></li>
                    <li><Link to={`${match.url}/3`}>Post #3</Link></li>
                    <li><Link to={`${match.url}/4`}>Post #4</Link></li>
                </ul>
                <Route exact path={match.url} render={()=>(<h3>Please select any post</h3>)}/>
                <Route path={`${match.url}/:id`} component={Journal}/>
            </div>
        </div>
    )
}