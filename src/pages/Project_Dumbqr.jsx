import React from 'react'
import { useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import dumbqrxyz2_big from '../assets/images/dumbqrxyz2-big.png';

import './stylesheets/Project_Details.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Project_Dumbqr = () => {

    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [location.pathname]);

    return (
        <>
            <div className='container'>

                {/* Header */}
                <Navbar />

                {/* Project-details */}
                <div className='project-detail-container'>

                    <div className='project-title'>
                        <p className='project-title-heading'>DumbQr.xyz</p>
                        <p className='project-status'>LIVE</p>
                    </div>

                    <div className='project-description'>It is a dynamic QR code platform that allows users to update the destination URL without changing the QR code, while also providing detailed analytics, including the location of each scan.</div>

                    <div className='big-image-placeholder'>
                        <img src={dumbqrxyz2_big} />
                    </div>

                    <div className='project-introduction-section'>
                        <div className='basic-introduction'>
                            <p className='basic-intro-heading'>Context</p>
                            <p className='basic-intro-text'>When I was building the URL shortener, I got the idea that changing redirect links while keeping the short URL the same could also be implemented with QR codes. This would allow us to change the destination of a QR code without modifying the actual QR code itself, meaning the same printed or distributed QR code could be reused for future links.
                                So here I am with a dynamic QR code generator which allows you to create QR code and change redirect links anytime along with detailed analytics of each and every scan. Created a very clean and minimal user interface and successfully deployed the app on AWS.
                            </p>
                            <p className='tech-stack'>Technologies used:
                                <span className='technologies'>  SpringBoot, Java, PostgreSQL, Redis, React, JavaScript</span>
                            </p>
                        </div>
                        <div className='quick-info'>
                            <div className='role-and-team'>
                                <div className='role-team'>
                                    <p className='role-team-heading'>Role</p>
                                    <p className='role-team-text'>Developer</p>
                                </div>
                                <div className='role-team'>
                                    <p className='role-team-heading'>Team</p>
                                    <p className='role-team-text'>Individual</p>
                                </div>
                            </div>
                            <div className='project-links'>
                                <div className='link'>
                                    <p className='github-link'>
                                        <Link to={"https://dumbqr.xyz"} target='_blank' className='github-link'>Live</Link>
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                        <path d="M8.96045 0.5C8.96045 0.223858 8.73659 2.82385e-07 8.46045 2.82385e-07H3.96045C3.68431 2.82385e-07 3.46045 0.223858 3.46045 0.5C3.46045 0.776143 3.68431 1 3.96045 1H7.96045V5C7.96045 5.27614 8.18431 5.5 8.46045 5.5C8.73659 5.5 8.96045 5.27614 8.96045 5V0.5ZM0.814003 8.85355L8.814 0.853554L8.1069 0.146447L0.106896 8.14645L0.814003 8.85355Z" fill="black" />
                                    </svg>
                                </div>
                                <div className='link'>
                                    <p className='github-link'>
                                        <Link to={"https://github.com/divyanshu-mahto/dumbqr"} target='_blank' className='github-link'>Github</Link>
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                        <path d="M8.96045 0.5C8.96045 0.223858 8.73659 2.82385e-07 8.46045 2.82385e-07H3.96045C3.68431 2.82385e-07 3.46045 0.223858 3.46045 0.5C3.46045 0.776143 3.68431 1 3.96045 1H7.96045V5C7.96045 5.27614 8.18431 5.5 8.46045 5.5C8.73659 5.5 8.96045 5.27614 8.96045 5V0.5ZM0.814003 8.85355L8.814 0.853554L8.1069 0.146447L0.106896 8.14645L0.814003 8.85355Z" fill="black" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="extra-content-container">
                        <p className="extra-content-heading">New learnings</p>
                        <ul className="extra-content-text">
                            <li>Caching data in Redis for faster redirection.</li>
                            <li>Implementing rate limiting using Bucket4j.</li>
                            <li>Implementing authentication using JWT (JSON Web Tokens).</li>
                            <li>Utilizing the ZXing library in Java to generate QR codes.</li>
                            <li>Integrating PostgreSQL with Spring Boot applications effectively.</li>
                            <li>Fetching geolocation of scans using IP and an external geolocation API.</li>
                        </ul>
                    </div>
                    
                    
                    <div className='demo-video-container'>
                        <p className="extra-content-heading">Demo video</p>
                        <div className="demo-video">
                            <iframe src="https://www.youtube.com/embed/eIAtliaJ11o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" ></iframe>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default Project_Dumbqr