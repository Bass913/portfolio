import React from 'react'

const Experience = () => {
    return (
        <div className='experience'>
            <div className='d-flex justify-content-center my-5'>
                <h1>Experience</h1>
            </div>
            <div className='container experience-wrapper'>
                <div className='timeline-block timeline-block-right'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h2>Assistant chef de projet digital</h2>
                        <p>Ministère des Armées (SGA / DSNJ)</p>
                        <h5>Avril 2020 - Avril 2021</h5>
                        <ul>
                            <li>Accompagner la conduite de projet numérique depuis la conception jusqu'a la mise en oeuvre</li>
                            <li>Suivre la prise en compte des différents processus d’agrément, defacturation et l’application des exigences
                                SSI, RGPD</li>
                            <li>Participer à la rédaction de la documentation nécessaire àl’établissement des
                            projets mis en oeuvre, cahier des clauses techniquesparticulières, fiches d’expression du besoin, comptes rendus d’ateliers</li>
                            <li>Organiser et participer à des ateliers et réunions de conception.</li>
                        </ul>
                    </div>
                </div>
            {/* - */}
                <div className='timeline-block timeline-block-left'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h2>Assistant administrateur systèmes et réseaux</h2>
                        <p>Innovation Group, NOBILAS </p>
                        <h5>Août 2017 - Août 2019</h5>
                        <ul>
                            <li>Gestion de l'Active Directory</li>
                            <li>Gestion de la messagerie sous Exchange</li>
                            <li>Gestion des incidents avec suivi (ticket)</li>
                            <li>Masterisation et configuration de postes</li>
                            <li>Helpdesk niveau 1 et 2</li>
                        </ul>
                    </div>
                </div>
                    </div>
        </div>
    )
}

export default Experience
