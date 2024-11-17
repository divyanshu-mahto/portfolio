import React from 'react'
import { useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import './stylesheets/Project_Details.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Project_MinuteGlass = () => {

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
                        <p className='project-title-heading'>Minute Glass</p>
                        <p className='project-status'>ABANDONED</p>
                    </div>

                    <div className='project-description'>A decentralized marketplace on Ethereum where users pay only for the time used on service websites, replacing the traditional subscription model.</div>

                    <div className='big-image-placeholder'>
                        <img src="/images/minute-glass-big.png" />
                    </div>

                    <div className='project-introduction-section'>
                        <div className='basic-introduction'>
                            <p className='basic-intro-heading'>Context</p>
                            <p className='basic-intro-text'>
                                It is a hackathon project. The idea was to build a decentralized marketplace for
                                service and tool websites where users can use the website and pay only for the time used, replacing the
                                monthly subscription model. To be built on Ethereum, it would allow us to directly deduct the amount from
                                their wallet. I was the team leader, and I took up the task to do the blockchain part of the project and
                                design the UI. It was a very challenging and learning experience, from not knowing anything about blockchain
                                to writing smart contracts in 36 hours.<br />
                                Although we were not able to complete the project within the time
                                frame of the hackathon, it's worth the mention since we won the Best UI/UX award for our design.
                            </p>
                            <p className='tech-stack'>Technologies used:
                                <span className='technologies'>  Solidity, Ethereum, JavaScript</span>
                            </p>
                        </div>
                        <div className='quick-info'>
                            <div className='role-and-team'>
                                <div className='role-team'>
                                    <p className='role-team-heading'>Role</p>
                                    <p className='role-team-text'>Developer and Designer</p>
                                </div>
                                <div className='role-team'>
                                    <p className='role-team-heading'>Team</p>
                                    <p className='role-team-text'>3 Members</p>
                                </div>
                            </div>
                            <div className='project-links'>
                                <div className='link'>
                                    <p className='github-link'>
                                        <Link to={"https://github.com/divyanshu-mahto/minute-glass"} target='_blank' className='github-link'>Github</Link>
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
                            <li>Writing smart contracts using Solidity.</li>
                            <li>Basic understanding of the Ethereum ecosystem and blockchain technology.</li>
                        </ul>
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default Project_MinuteGlass