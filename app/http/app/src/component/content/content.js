import React, { Component } from 'react'
import './content.css'
import Google from '../../assets/google-play-icon.png'
import Product from '../../assets/product.png'

export const Content = ()=> {
    return (
        <section id = "content">
            <div className = "download">
                <span className = "intro1">PREPARE FOR YOUR</span>
                <br/>
                <span className = "intro2">PRESENT TIME</span>
                <a href="https://play.google.com/store/apps/details?id=s2017s25.kr.hs.mirim.present_2018stac">
                    <img className="googleImg" src={Google}/>
                </a>
            </div>
            <div className = "product">
                <img className="productImg" src={Product}/>
            </div>
        </section>
    )
}