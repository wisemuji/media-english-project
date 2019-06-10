import React, { Component } from 'react'
import './communicate.css'
import axios from 'axios'

const apiURL = "http://54.180.32.86:9001";
export class Communicate extends Component {
    constructor () {
        super()
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
        this.handleClick = this.handleClick.bind(this) // 콜백에서 `this` 작동
    }
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    handleClick = () => {
        let form = new FormData()
        form.set('name', this.state.name)
        form.set('email',this.state.email)
        form.set('subject',this.state.subject)
        form.set('message',this.state.message)
        axios.post(apiURL+'/send-mail', form) 
            .then( response => {
                console.log('response : ', JSON.stringify(response, null, 2)) })
            .catch( error => {
                console.log('failed', error) 
            })
    }
        
    render() {
        return (
            <section id = "communicate">
                <div className = "summary">
                    <h2>Contact Us</h2>
                    <p>We want to hear from you! Feel free to contact us.</p>
                </div>
                <div className = "contact">
                    <div class = "contact-table">
                        <input value={this.state.name} onChange={this.handleChange} type="text" class="input-form" name="name" placeholder="Name" required /><br/>
                        <input value={this.state.email} onChange={this.handleChange} type="text" class="input-form" name="email" placeholder="Email" required /><br/>
                        <input value={this.state.subject} onChange={this.handleChange} type="text" class="input-form" name="subject" placeholder="Subject" required /><br/>
                        <textarea value={this.state.message} onChange={this.handleChange} class="input-form message-form" name="message" placeholder="Message" required /><br/>
                    </div>
                    <button class="submit-btn" onClick={ this.handleClick }>
                        <span>Submit </span>
                    </button>
                </div>
            </section>
        )  
    }
}