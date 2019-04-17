import React, { Component } from 'react'
import './introduction.css'
import Video from '../../assets/intro.mp4'

export const Introduction = ()=> {
    return (
        <section id = "introduction">
            <div className = "summary">
                <h2>Introducing PRE-SENT</h2>
                <p>We often give a presentation in school or company.
                    Sometimes we do it for school assignments, 
                    or to introduce some companies or projects. 
                    ‘PRE-SENT’ is an app that helps you give these 
                    presentation perfectly.</p>
            </div>
            <div className="video">
                <video class="intro_video" controls autoplay loop>
                    <source src={Video} type="video/mp4"/>
                </video>
            </div>
            <div className="features">
                <div className="stopwatch">
                    <span>stopwatch</span>
                </div>
                <div className="script">
                    <span>script</span>
                </div>
                <div className="keypoint">
                    <span>keypoint</span>
                </div>
                <div className="smartwatch">
                    <span>smartwatch</span>
                </div>
            </div>
        </section>
    )
}