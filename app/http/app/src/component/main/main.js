import React, { Component } from 'react'

// import { Nav } from '../nav/nav'
import { Content } from '../content/content'
import { Introduction } from '../introduction/introduction'
import { Reviews } from '../reviews/reviews'
import { Footer } from '../footer/footer'
// import { Communicate } from '../communicate/communicate'
// import { Development } from '../development/development'

export const Main = ()=> {
    return (
        <div>
            <Content/>
            <Introduction/>
            <Reviews/>
            <Footer/>
        </div>
    )
}