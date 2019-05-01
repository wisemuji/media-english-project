import React, { Component } from 'react'
import Quote from '../../assets/quote.png'
import './reviews.css'


export const Reviews = ()=> {
    return (
        <section id = "reviews">
            <div className = "summary">
                <h2>What People are Saying</h2>
                <p>People are commenting good stories about us in Google Play Store. We love Reviews!!</p>
            </div>
            <div className = "comments">
                <Comment comment={"very good app!1"} rating="5" author="kim" />               
                <Comment comment={"very good app!2"} rating="5" author="lee" />               
                <Comment comment={"very good app!3"} rating="5" author="park" />               
            </div>
        </section>
    )
}

class Comment extends Component {
    render() {
        return (
            <div className = "comment-wrap">
                <div className = "comment-box">
                    <img className = "comment-img" src={Quote} alt="quote"/>
                    <p className = "comment-text">
                        {this.props.comment}
                    </p>
                </div>
                <div className = "tri"></div>
                <div className = "rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>
                <div className = "etc">
                    <span className = "author">
                        {this.props.author}
                    </span>
                </div>
            </div>
        )
    }
}