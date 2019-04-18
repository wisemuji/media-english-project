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
            {/* <div className="video">
                <video class="intro_video" controls autoplay loop>
                    <source src={Video} type="video/mp4"/>
                </video>
            </div> */}
                <p>We often give a presentation in school or company.
                    Sometimes we do it for school assignments, 
                    or to introduce some companies or projects. 
                    <span className="present-text">‘PRE-SENT’</span> is an app that helps you give these 
                    presentation perfectly.</p>
            </div>
            <div className="features">
                {/* <h2>Features</h2> */}
                <div className="feature_items">
                    <div className="stopwatch">
                        <img src={Stopwatch} alt="Stopwatch"/>
                        <p><strong>Stopwatch</strong></p>
                        <p>Use the stopwatch and finish your presentation in time.</p>
                    </div>
                    <div className="script">
                        <img src={Script} alt="Script"/>
                        <p><strong>Presentation Script</strong></p>
                        <p>You can write down your own script and use it by using the Speech Recognition API.</p>
                    </div>
                    <div className="keypoint">
                        <img src={Keypoint} alt="Keypoint"/>
                        <p><strong>Key points</strong></p>
                        <p>Receive vibrating notifications by adding 'key points' of the presentation</p>
                    </div>
                    <div className="smartwatch">
                        <img src={Smartwatch} alt="Smartwatch"/>
                        <p><strong className="present">Smartwatch</strong></p>
                        <p>Connect your watch with yout phone and receive notifications.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}