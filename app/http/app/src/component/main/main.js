import React, { Component } from 'react'

import { Nav } from '../nav/nav'
import { Content } from '../content/content'
import { Introduction } from '../introduction/introduction'
import { Reviews } from '../reviews/reviews'
import { Communicate } from '../communicate/communicate'
import { Development } from '../development/development'

export const Main = ()=> {
    return (
        <div>
            <Nav/>
            <Content/>
            {/* <Introduction/>
            <Reviews/>
            <Communicate/> */}
            <Development/>
        </div>
    )
}