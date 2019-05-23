import React, { Component } from 'react'
import './communicate.css'

export const Communicate = ()=> {
    return (
        <section id = "communicate">
            <div className = "summary">
                <h2>Contact Us</h2>
                <p>We want to hear from you! Feel free to conteact us.</p>
            </div>
            <div className = "contact">
                <div class = "contact-table">
                    <input type="text" class="input-form" name="name" placeholder="Name" required /><br/>
                    <input type="text" class="input-form" name="email" placeholder="Email" required /><br/>
                    <input type="text" class="input-form" name="subject" placeholder="Subject" required /><br/>
                    <textarea class="input-form message-form" name="message" placeholder="Message" required /><br/>
                </div>
                <button class="submit-btn" >
                    <span>Submit </span>
                </button>
            </div>
        </section>
    )
}