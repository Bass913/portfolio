import React from 'react'
import Typed from 'react-typed'
import { Link } from 'react-scroll'

const Header = () => {
    return (
    
        <div id='home' className='header-wraper'>
            <div className='main-info'>
                <h1>Bastien Dikiadi</h1>
                <Typed className='typed-text'
                 strings={["Étudiant", "Développeur full-stack", "Motivé", "Jeune"]}
                 typeSpeed={40}
                 backSpeed={60}
                 loop
                 />
                 <Link to='contacts' offset={-175} className='btn-main-offer'>Contactez-moi</Link>
            </div>  
        </div>
    )
}

export default Header
