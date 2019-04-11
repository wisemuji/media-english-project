import React, { Component } from 'react'
import './nav.css'
import Logo from '../../assets/logo.png'

let introduction = "INTRODUCTION"
let reviews = "REVIEWS"
let communicate = "COMMUNICATE"
let development_journal = "DEVELOPMENT JOURNAL"

export const Nav = ()=> {
    return (
        <div className = "nav">
            <div className = "logo">
                <img className="logoImg" src={Logo}/>
            </div>
            <div className = "innerTap">
                <span className = "introduction">{introduction}</span>
                <span className = "reviews">{reviews}</span>
                <span className = "communicate">{communicate}</span>
                <span className = "development_journal">{development_journal}</span>
            </div>
        </div>
    )
}