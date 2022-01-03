import React from 'react'
import logo from '../logo.png'
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/#"><img className="logo" src={logo} alt='logo...'></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#f9ab00"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <Link smooth={true} to='home' offset={-175} className="nav-link" href="#">Accueil <span className="sr-only"></span></Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to='about' offset={-175} className="nav-link" href="#">Qui-suis-je ?</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to='services' offset={-175} className="nav-link" href="#">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to='experience' offset={-175} className="nav-link" href="#">Experience</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to='portfolio' offset={-175} className="nav-link" href="#">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to='contacts' offset={-175} className="nav-link" href="#">Contact</Link>
                    </li>
                    </ul>
                </div>
            </div>
</nav>

    )
}

export default Navbar
