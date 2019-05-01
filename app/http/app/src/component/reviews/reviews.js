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
                <div className = "comment-wrap">
                    <div className = "comment-box">
                        <img className = "comment-img" src={Quote} alt="quote"/>
                        <p className = "comment-text">
                            "very good app very good app very good app very good app very good app"
                        </p>
                    </div>
                    <div className = "tri"></div>
                </div>
                <div className = "comment-wrap">
                    <div className = "comment-box">
                        <img className = "comment-img" src={Quote} alt="quote"/>
                        <p className = "comment-text">
                            "very good app very good app very good app very good app very good app"
                        </p>
                    </div>
                    <div className = "tri"></div>
                </div>
                <div className = "comment-wrap">
                    <div className = "comment-box">
                        <img className = "comment-img" src={Quote} alt="quote"/>
                        <p className = "comment-text">
                            "very good app very good app very good app very good app very good app"
                        </p>
                    </div>
                    <div className = "tri"></div>
                </div>
            </div>
        </section>
    )
}
