import React from 'react'

export default function Header(){
    return(
        <header>
            <nav className = "nav">
                <img src={require('../assets/images/avatar.jpg')} className="img"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}