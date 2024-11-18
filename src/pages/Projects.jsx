import React from 'react'
import { useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import dumbqr_small from '../assets/images/dumbqr-small.png';
import minute_glass_small from '../assets/images/minute-glass-small.png';

import './stylesheets/Projects.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Projects = () => {

    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [location.pathname]);


    return (
        <>
            <div className='container'>

                {/* Header */}
                <Navbar />
                <div className='projects-page-container'>

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
                                <img src={dumbqr_small} />
                            </div>
                            <div className='about-project'>
                                <div className='project-text'>
                                    <div className='project-text-heading'>
                                        DumbQR
                                        <span className="dev-status">IN DEVELOPMENT</span>
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
                            <div className='small-image-placeholder'></div>
                            <div className='about-project'>
                                <div className='project-text'>
                                    <div className='project-text-heading'>
                                        Trip Planner using GTFS in Neo4j
                                        <span className="dev-status">IN DEVELOPMENT</span>
                                    </div>
                                    <div className='project-text-description'>A spring boot application that loads GTFS data into Neo4j graph database and provide trip planning api's.</div>
                                </div>
                                <Link to={"/projects/trip-planner-gtfs-neo4j"} className='go-to-button'>
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

                        {/* Project-5 */}
                        <div className='project-container'>
                            <div className='small-image-placeholder'></div>
                            <div className='about-project'>
                                <div className='project-text'>
                                    <div className='project-text-heading'>URL Shortener</div>
                                    <div className='project-text-description'>A simple URL shortener that generates unique short IDs for long URLs and tracks the number of visits to each short URL.</div>
                                </div>
                                <Link to={"/projects/url-shortener"} className='go-to-button'>
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

export default Projects