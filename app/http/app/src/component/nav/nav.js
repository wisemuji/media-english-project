import React, { Component } from 'react'
import './nav.css'
import Logo from '../../assets/logo2.png'
import { Link } from 'react-router-dom'

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
                    <span className = "introduction"><Link to="introduction">{introduction}</Link></span>
                    <span className = "reviews"><Link to="reviews">{reviews}</Link></span>
                    <span className = "communicate"><Link to="communicate">{communicate}</Link></span>
                    <span className = "development"><Link to="development">{development}</Link></span>
                </div>
            </div>
        </nav>
    )
}