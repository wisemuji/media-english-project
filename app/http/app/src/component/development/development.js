import React, { Component } from 'react'
import showdown from "showdown";
import './development.css'
import week1 from './week1.js'
import { Link, Route } from 'react-router-dom';
import { Journal } from './journal';

export const Development = ({match})=> {
    const converter = new showdown.Converter();
    const html = converter.makeHtml(week1);

    return (
        <div id="development">
            <div className="journals">
                {/* <div className="week1" dangerouslySetInnerHTML={{ __html: html }}/> */}
                {/* {this.props.children} */}
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