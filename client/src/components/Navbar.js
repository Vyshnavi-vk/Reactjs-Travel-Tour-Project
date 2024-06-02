import React, { useState } from 'react'
import './NavbarStyles.css'
import { MenuItems } from './MenuItems'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [clicked, setClicked] = useState(false)
    return (
        <nav className='NavbarItems'>
            <h1 className='navbar-logo'>Trippy</h1>

            <div className='menu-icons' onClick={() => setClicked(!clicked)}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, indx) => {
                    return (
                        <li>
                            <Link className={item.cName} to={item.url}>
                                <i className={item.icon}></i>{item.title}
                            </Link>
                        </li>
                    )
                })}
                <button>Sign Up</button>
            </ul>
        </nav>
    )
}

export default Navbar
