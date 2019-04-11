import React, { Component } from 'react'
import './content.css'
import Google from '../../assets/google-play-icon.png'
import Product from '../../assets/product.png'

export const Content = ()=> {
    return (
        <div className = "content">
            <div className = "download">
                <span className = "intro1">PREPARE FOR YOUR</span>
                <br/>
                <span className = "intro2">PRESENT TIME</span>
                <img className="googleImg" src={Google}/>
            </div>
            <div className = "product">
                <img className="productImg" src={Product}/>
            </div>
        </div>
    )
}