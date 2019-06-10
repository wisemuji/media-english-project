import React from 'react';
import showdown from "showdown";
import week1 from './week1.js'
import week2 from './week2.js'
import week3 from './week3.js'
import week4 from './week4.js'
import week5 from './week5.js'

export const Journal = ({match}) => {
    let journal;
    switch (match.params.id){
        case '1':
            journal = week1;
            break;
        case '2':
            journal = week2;
            break;
        case '3':
            journal = week3;
            break;
        case '4':
            journal = week4;
            break;
        case '5':
            journal = week5;
            break;
        default:
            journal = week1;
    }
    const converter = new showdown.Converter();
    const html = converter.makeHtml(journal);
    return (
        <div>
            <div className="journal" dangerouslySetInnerHTML={{ __html: html }}/>
        </div>
    );
};