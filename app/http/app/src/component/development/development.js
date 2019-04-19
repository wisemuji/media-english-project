import React, { Component } from 'react'
import showdown from "showdown";
import './development.css'
import week1 from './week1.js'

export const Development = ()=> {
    const converter = new showdown.Converter();
    const html = converter.makeHtml(week1);

    return (
        <div id="development">
            <div className="journals">
                {/* <div className="week1" dangerouslySetInnerHTML={{ __html: html }}/> */}
                {/* {this.props.children} */}
            </div>
        </div>
    )
}