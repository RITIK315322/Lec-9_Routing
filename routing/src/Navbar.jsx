import React from 'react'
import './navbar.css'

import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

console.log("header rendered...");


    return (
        <div id='abc'>

            <ul id='abcd'>

                {/* <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">contact</a></li>
         */}

                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>

            </ul>

        </div>
    )
}
