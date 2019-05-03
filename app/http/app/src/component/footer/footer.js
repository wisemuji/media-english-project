import React from 'react'
import Logo from '../../assets/logo2.png'
import './footer.css'
export const Footer = ()=> {
    return (
        <section id = "footer">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <img className="logoImg" src={Logo}/>
            <div className = "contect">
                <div className = "mail">
                    wisemuji@gmail.com
                </div>
                <div className="copyright">
                    &copy; 2019 by Hot Potatoes(PRE-SENT).
                </div>
            </div>
        </section>
    )
}