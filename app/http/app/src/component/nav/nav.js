import React, { Component } from 'react'
import './nav.css'
import Logo from '../../assets/logo2.png'

let introduction = "INTRODUCTION"
let reviews = "REVIEWS"
let communicate = "COMMUNICATE"
let development = "DEVELOPMENT"

export const Nav = ()=> {
    return (
        <nav id = "nav">
            <div className = "wrap">
                <div className = "logo">
                    <a href="#content"><img className="logoImg" src={Logo}/></a>
                </div>
                <div className = "innerTap">
                    <span className = "introduction"><a href="#introduction">{introduction}</a></span>
                    <span className = "reviews"><a href="#reviews">{reviews}</a></span>
                    <span className = "communicate"><a href="#communicate">{communicate}</a></span>
                    <span className = "development"><a href="#development">{development}</a></span>
                </div>
            </div>
        </nav>
    )
}