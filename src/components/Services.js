import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faFileCode, faProjectDiagram, faGlobe } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <div className='services'>
            <h1 className='py-5'>Mes services</h1>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='box'>
                                <div className='circle'>
                                    <FontAwesomeIcon className='icon' icon={faDesktop} size='2x'></FontAwesomeIcon>
                                </div>
                                <h3>Web Design</h3>
                                <p>Mes compétences en programmation, en ergonomie et en interactivité 
                                    me permettent de créer des interfaces web optimisés.
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='box'>
                            <div className='circle'>
                                    <FontAwesomeIcon className='icon' icon={faFileCode} size='2x'></FontAwesomeIcon>
                                </div>
                                <h3>Web Development</h3>
                                <p>Création de site vitrine et applications web from scratch avec l'aide de Frameworks front
                                    ou via CMS (Wordpress)</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='box'>
                            <div className='circle'>
                                    <FontAwesomeIcon className='icon' icon={faPython} size='2x'></FontAwesomeIcon>
                                </div>
                                <h3>Software Development</h3>
                                <p>Création d'applications (client lourd) / applications mobiles. Architecture
                                    logiciel (UML)
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='box'>
                            <div className='circle'>
                                    <FontAwesomeIcon className='icon' icon={faProjectDiagram} size='2x'></FontAwesomeIcon>
                                </div>
                                <h3>Project Management</h3>
                                <p>Conduite de projets numérique depuis la conception jusqu'a la mise 
                                    en oeuvre. (Méthodes agiles et waterfall)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Services
