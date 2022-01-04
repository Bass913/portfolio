import React from 'react'
import Typed from 'react-typed'

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
                 <a href='/#' className='btn-main-offer'>Contactez-moi</a>
            </div>  
        </div>
    )
}

export default Header
