import React from 'react'
import { Link } from 'react-scroll'
import { 
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
     } from 'react-share'
import Portfolio from './Portfolio'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div className='d-flex'>
                            <p>Portfolio</p>
                        </div>
                        <div className='d-flex'>
                            <a href='tel:0612037793'>+33(6)12037793</a>
                        </div>
                        <div className='d-flex'>
                            <a href='mailto:bastiendikiadi@outlook.fr'>bastiendikiadi@outlook.fr</a>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-2 col-sm-6'>
                        <div className='row'>
                            <div className='col'>
                                <Link to='home' offset={-175} className='footer-nav'>Home</Link>
                                <br />
                                <Link to='about' offset={-175} className='footer-nav'>Qui-suis-je ?</Link>
                                <br />
                                <Link to='services' offset={-175} className='footer-nav'>Mes services</Link>  
                            </div>
                            <div className='col'>
                                <Link to='experience' offset={-175} className='footer-nav'>Experience</Link>
                                <br />
                                <Link to='portfolio' offset={-175} className='footer-nav'>Portfolio</Link>
                                <br />
                                <Link to='contacts' offset={-175} className='footer-nav'>Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-5 col-sm-6 align-items-center'>
                        <div className='d-flex justify-content-center'>
                            <FacebookShareButton 
                            url={'bastiendikiadi.com'}
                            quote={'Portfolio de Bastien Dikiadi'}
                            hashtag='portfolio'>
                                <FacebookIcon className='mx-3' size={36}/>
                            </FacebookShareButton>
                            <TwitterShareButton 
                            url={'bastiendikiadi.com'}
                            quote={'Portfolio de Bastien Dikiadi'}
                            hashtag='portfolio'>
                                <TwitterIcon className='mx-3' size={36}/>
                            </TwitterShareButton>
                            <LinkedinShareButton 
                            url={'bastiendikiadi.com'}
                            quote={'Portfolio de Bastien Dikiadi'}
                            hashtag='portfolio'>
                                <LinkedinIcon className='mx-3' size={36}/>
                            </LinkedinShareButton>
                            <RedditShareButton 
                            url={'bastiendikiadi.com'}
                            quote={'Portfolio de Bastien Dikiadi'}
                            hashtag='portfolio'>
                                <RedditIcon className='mx-3' size={36}/>
                            </RedditShareButton>
                        </div>
                        <p className='pt-3 text-center'>
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;New Horizon | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
