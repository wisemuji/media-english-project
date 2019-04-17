import React, { Component } from 'react'
import './introduction.css'
import Video from '../../assets/intro.mp4'
import Stopwatch from '../../assets/stopwatch.png'
import Script from '../../assets/script.png'
import Keypoint from '../../assets/keypoint.png'
import Smartwatch from '../../assets/smartwatch.png'

export const Introduction = ()=> {
    return (
        <section id = "introduction">
            <div className = "summary">
                <h2>Introducing PRE-SENT</h2>
                <p>We often give a presentation in school or company.
                    Sometimes we do it for school assignments, 
                    or to introduce some companies or projects. 
                    <strong>‘PRE-SENT’</strong> is an app that helps you give these 
                    presentation perfectly.</p>
            </div>
            <div className="video">
                <video class="intro_video" controls autoplay loop>
                    <source src={Video} type="video/mp4"/>
                </video>
            </div>
            <div className="features">
                <div className="stopwatch">
                    <img src={Stopwatch} alt="Stopwatch"/>
                    <span>stopwatch</span>
                </div>
                <div className="script">
                    <img src={Script} alt="Script"/>
                    <span>script</span>
                </div>
                <div className="keypoint">
                    <img src={Keypoint} alt="Keypoint"/>
                    <span>keypoint</span>
                </div>
                <div className="smartwatch">
                    <img src={Smartwatch} alt="Smartwatch"/>
                    <span>smartwatch</span>
                </div>
            </div>
        </section>
    )
}