import React, { Component } from 'react'
import './nav.css'
import Logo from '../../assets/logo2.png'
import { Link } from 'react-router'

let introduction = "INTRODUCTION"
let reviews = "REVIEWS"
let communicate = "COMMUNICATE"
let development = "DEVELOPMENT"

export const Nav = ()=> {
    return (
        <nav id = "nav">
            <div className = "wrap">
                <div className = "logo">
                    <Link to="/"><img className="logoImg" src={Logo}/></Link>
                </div>
                <div className = "innerTap">
                    <span><Link to="introduction">{introduction}</Link></span>
                    <span><Link to="reviews">{reviews}</Link></span>
                    <span><Link to="communicate">{communicate}</Link></span>
                    <span><Link to="development">{development}</Link></span>
                </div>
            </div>
        </nav>
    )
}