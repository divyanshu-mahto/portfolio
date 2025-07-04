import React from 'react'
import { useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import peep_big from '../assets/images/peep-big.png';

import './stylesheets/Project_Details.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Project_Peep = () => {

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
                        <p className='project-title-heading'>Peep.email</p>
                        <p className='project-status'>LIVE</p>
                    </div>

                    <div className='project-description'>A custom Gmail notification system where users receive push notifications of incoming mail on their phone only if it's relevant to them, filtering out all the noise so that your phone peeps only when it is important.</div>

                    <div className='big-image-placeholder'>
                        <img src={peep_big} />
                    </div>

                    <div className='project-introduction-section'>
                        <div className='basic-introduction'>
                            <p className='basic-intro-heading'>Context</p>
                            <p className='basic-intro-text'>This project idea came out of a personal need to get gmail notifications for mails that are actually relevant to me not just labeled as important. 
                                It gets difficult to know if the gmail beep i heard on my phone is an important mail that needs my attention, or is just another invitation to some random event happening on campus. 
                                So I built peep.email which solves this problem, now i know if i have a peep notification, there's something important in my inbox. 
                                Peep allows users to add custom rules in natural language defining what’s important for them, or any email that they are expecting in future that’s going to be very important. 
                                Peep will notify the user only if the incoming email triggers any of the user defined rules,  filtering out all the noise so that your phone peeps only when it is important
                            </p>
                            <p className='tech-stack'>Technologies used:
                                <span className='technologies'>  SpringBoot, Java, PostgreSQL, React, JavaScript, Flutter</span>
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
                                        <Link to={"https://peep.email"} target='_blank' className='github-link'>Live</Link>
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                        <path d="M8.96045 0.5C8.96045 0.223858 8.73659 2.82385e-07 8.46045 2.82385e-07H3.96045C3.68431 2.82385e-07 3.46045 0.223858 3.46045 0.5C3.46045 0.776143 3.68431 1 3.96045 1H7.96045V5C7.96045 5.27614 8.18431 5.5 8.46045 5.5C8.73659 5.5 8.96045 5.27614 8.96045 5V0.5ZM0.814003 8.85355L8.814 0.853554L8.1069 0.146447L0.106896 8.14645L0.814003 8.85355Z" fill="black" />
                                    </svg>
                                </div>
                                <div className='link'>
                                    <p className='github-link'>
                                        <Link to={"https://github.com/divyanshu-mahto/peep"} target='_blank' className='github-link'>Github</Link>
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
                            <li>Google Cloud Pub/Sub configuration to setup Gmail watch</li>
                            <li>Utilizing Gemini API</li>
                            <li>Sending push notification to android app through FCM</li>
                        </ul>
                    </div>
                    
                    
                    {/* <div className='demo-video-container'>
                        <p className="extra-content-heading">Demo video</p>
                        <div className="demo-video">
                            <iframe src="https://www.youtube.com/embed/eIAtliaJ11o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" ></iframe>
                        </div>
                    </div> */}

                </div>

            </div>
            <Footer />
        </>
    )
}

export default Project_Peep