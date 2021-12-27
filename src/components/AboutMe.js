import React from 'react'
import author from '../photo.jpg'

const AboutMe = () => {
    return (
        <div className='container py-5'>
            <div className='row py-5'>
                <div className='col-lg-6 col-xm-12'>
                    <div className='photo-wrap mb-5'>
                        <img className='profile-img' src={author} alt='author...'></img>
                    </div>
                </div>
                <div className='col-lg-6 col-xm-12'>
                    <h1 className='about-heading'>Qui-suis-je ?</h1>
                    <p>
                        Bonjour ! Je m'appelle Bastien Dikiadi. Je suis étudiant en informatique. J'effectue
                        un Bachelor en 3ème année "Ingénierie du web" à l'ESGI. J'effectue
                        cette formation en alternance sous le rythme : 3 semaines / 1 semaine. 
                        Je suis un développeur full-stack.
                        Jusqu'a présent, j'ai pu réaliser différents projets personnels avec diverses langages. Je
                        sais créer des sites internets responsive. Je sais également créer des applications web et 
                        développer des programmes informatique. Je suis à la recherche d'un contrat d'alternance dans 
                        le cadre de ma formation afin de mettre mes compétences au service d'une entreprise. 
                    </p>    
                </div>  
            </div>
        </div>
    )
}

export default AboutMe
