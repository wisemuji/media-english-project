import React, { Component } from 'react'
import './communicate.css'
import axios from 'axios'

const apiURL = "https://wisemuji.pythonanywhere.com";
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

    formCheck() {
        if(this.state.name && this.state.email && this.state.subject && this.state.message ){
            return true
        }
        else return false
    }

    formData() {
        let form = new FormData()
        form.set('name', this.state.name)
        form.set('email',this.state.email)
        form.set('subject',this.state.subject)
        form.set('message',this.state.message)
        return form
    }
    handleClick = (e) => {
        if(!this.formCheck()) {
            alert('빈칸을 모두 채워주세요.')
            return
        }
        axios.post(apiURL+'/send-mail', this.formData()) 
        .then( response => {
            alert('이메일이 성공적으로 전송되었습니다.')
            // 상태 초기화
            this.setState({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
            console.log('response : ', JSON.stringify(response, null, 2)) })
        .catch( error => {
            alert('이메일 전송이 실패하였습니다.')
            console.log('failed', error) 
        })
        alert('이메일 전송중입니다.')
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
                    <input type="submit" class="submit-btn" onClick={ this.handleClick } value="Submit"/>
                </div>
            </section>
        )  
    }
}