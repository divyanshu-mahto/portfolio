import React from 'react'
import { useLayoutEffect, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import dumbqrxyz_small from '../assets/images/dumbqrxyz-small.png';
import minute_glass_small from '../assets/images/minute-glass-small.png';
import peep_small from '../assets/images/peep-small.png';
import colon_key from '../assets/images/colon-key.png';
import down_key from '../assets/images/down-key.png';
import parenthesis_key from '../assets/images/parentesis-open.png';
import accolade_open_key from '../assets/images/accolade-open-key.png';
import accolade_close_key from '../assets/images/accolade-close-key.png';
import waves from '../assets/images/download.mp4';

import './stylesheets/Home.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {

    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [location.pathname]);

    const projectSectionRef = useRef(null);
    
    useEffect(() => {
        if (location.hash) {
        const id = location.hash.substring(1);

        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            });
        }
        
        }
    }, [location]);

    return (
        <>
            <div className='container'>

                {/* Header */}
                <Navbar />

                <div className='home-container'>
                    <div className='home-vid'><video loop autoPlay muted className='waves'><source src={waves} type="video/mp4"/></video></div>
                    <div className='home-heading'> <span><img className='key-1' src={accolade_open_key}></img></span> <i>Divyanshu</i> <span><img className='key-1' src={accolade_close_key}></img></span> is a final year computer science student. Navigating his way through tech and building software that makes an impact. <span><img className='key-2' src={colon_key}></img></span>  <span><img className='key-2' src={parenthesis_key}></img></span> </div>
                    <div className='down-key'><img className='key-4' src={down_key}></img></div>
                </div>

                <div className='projects-page-container' id='projects' ref={projectSectionRef}>

                    {/* Page Info */}
                    <div className='projects-page-info-outer-container'>
                        <div className='projects-page-heading-container'>
                            <p className='projects-page-heading'>Projects</p>
                            <p className='projects-page-subheading'>A window into my skills and creativity</p>
                            <p className='projects-page-subheading'>through real-world applications</p>
                        </div>
                    </div>


                    {/* Page content */}
                    <div className='page-content'>

                        {/* Project-1 */}
                        <div className='project-container'>
                            <div className='small-image-placeholder'>
                                <img src={dumbqrxyz_small} />
                            </div>
                            <div className='about-project'>
                                <div className='project-text'>
                                    <div className='project-text-heading'>
                                        DumbQR
                                        <span className="dev-status">LIVE</span>
                                    </div>
                                    <div className='project-text-description'>A dynamic QR code platform that allows users to update the destination URL without changing the QR code, while also providing detailed analytics, including the location of each scan.</div>
                                </div>
                                <Link to={"/projects/dumbqr"} className='go-to-button'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 12 12" fill="none">
                                        <path d="M10.2828 3.78284C10.4391 3.62663 10.4391 3.37337 10.2828 3.21716L7.73726 0.671574C7.58105 0.515364 7.32778 0.515364 7.17157 0.671574C7.01536 0.827783 7.01536 1.08105 7.17157 1.23726L9.43431 3.5L7.17157 5.76274C7.01536 5.91895 7.01536 6.17222 7.17157 6.32843C7.32778 6.48464 7.58105 6.48464 7.73726 6.32843L10.2828 3.78284ZM-3.49691e-08 3.9L10 3.9L10 3.1L3.49691e-08 3.1L-3.49691e-08 3.9Z" fill="black" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Project-2 */}
                        <div className='project-container'>
                            <div className='small-image-placeholder'>
                                <img src={peep_small} />
                            </div>
                            <div className='about-project'>
                                <div className='project-text'>
                                    <div className='project-text-heading'>
                                        Peep.email
                                        <span className="dev-status">LIVE</span>
                                    </div>
                                    <div className='project-text-description'> A custom Gmail notification system where users receive push notifications of incoming mail on their phone only if it's relevant to them, filtering out all the noise so that your phone peeps only when it is important.</div>
                                </div>
                                <Link to={"/projects/peep"} className='go-to-button'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 12 12" fill="none">
                                        <path d="M10.2828 3.78284C10.4391 3.62663 10.4391 3.37337 10.2828 3.21716L7.73726 0.671574C7.58105 0.515364 7.32778 0.515364 7.17157 0.671574C7.01536 0.827783 7.01536 1.08105 7.17157 1.23726L9.43431 3.5L7.17157 5.76274C7.01536 5.91895 7.01536 6.17222 7.17157 6.32843C7.32778 6.48464 7.58105 6.48464 7.73726 6.32843L10.2828 3.78284ZM-3.49691e-08 3.9L10 3.9L10 3.1L3.49691e-08 3.1L-3.49691e-08 3.9Z" fill="black" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Project-3 */}
                        <div className='project-container'>
                            <div className='small-image-placeholder'></div>
                            <div className='about-project'>
                                <div className='project-text'>
                                    <div className='project-text-heading'>Email Service AWS SpringBoot</div>
                                    <div className='project-text-description'>Email sending service built for SpringBoot applications using AWS Simple Email Service</div>
                                </div>
                                <Link to={"/projects/email-service-springboot"} className='go-to-button'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 12 12" fill="none">
                                        <path d="M10.2828 3.78284C10.4391 3.62663 10.4391 3.37337 10.2828 3.21716L7.73726 0.671574C7.58105 0.515364 7.32778 0.515364 7.17157 0.671574C7.01536 0.827783 7.01536 1.08105 7.17157 1.23726L9.43431 3.5L7.17157 5.76274C7.01536 5.91895 7.01536 6.17222 7.17157 6.32843C7.32778 6.48464 7.58105 6.48464 7.73726 6.32843L10.2828 3.78284ZM-3.49691e-08 3.9L10 3.9L10 3.1L3.49691e-08 3.1L-3.49691e-08 3.9Z" fill="black" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Project-4 */}
                        <div className='project-container'>
                            <div className='small-image-placeholder'>
                                <img src={minute_glass_small} />
                            </div>
                            <div className='about-project'>
                                <div className='project-text'>
                                    <div className='project-text-heading'>Minute Glass</div>
                                    <div className='project-text-description'>A decentralized marketplace on Ethereum where users pay only for the time used on service websites, replacing the traditional subscription model.</div>
                                </div>
                                <Link to={"/projects/minuteglass"} className='go-to-button'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 12 12" fill="none">
                                        <path d="M10.2828 3.78284C10.4391 3.62663 10.4391 3.37337 10.2828 3.21716L7.73726 0.671574C7.58105 0.515364 7.32778 0.515364 7.17157 0.671574C7.01536 0.827783 7.01536 1.08105 7.17157 1.23726L9.43431 3.5L7.17157 5.76274C7.01536 5.91895 7.01536 6.17222 7.17157 6.32843C7.32778 6.48464 7.58105 6.48464 7.73726 6.32843L10.2828 3.78284ZM-3.49691e-08 3.9L10 3.9L10 3.1L3.49691e-08 3.1L-3.49691e-08 3.9Z" fill="black" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>

    )
}

export default Home