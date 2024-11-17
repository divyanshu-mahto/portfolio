import React from 'react'
import { useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import './stylesheets/Project_Details.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Project_AWS_SES = () => {

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
                        <p className='project-title-heading'>Email Service AWS SpringBoot</p>
                        <p className='project-status'></p>
                    </div>

                    <div className='project-description'>Email sending service built for SpringBoot applications using AWS Simple Email Service</div>

                    <div className='big-image-placeholder'></div>

                    <div className='project-introduction-section'>
                        <div className='basic-introduction'>
                            <p className='basic-intro-heading'>Context</p>
                            <p className='basic-intro-text'>
                                I was deploying a project on AWS as part of an assignment for a university AWS course and needed to deliver
                                notifications to users using SES. Figuring out how to do that in SpringBoot took a long time, and as I was
                                juggling numerous documentations, I noticed there isn't much resources on how to do it in Java. So I made a
                                ready-to-use boilerplate project that can be merged with any existing SpringBoot application by simply adding
                                a few files. Just customize the email template as per your requirement, and you're good to go. <br />
                            </p>
                            <p className='tech-stack'>Technologies used:
                                <span className='technologies'>  SpringBoot, Java, AWS SES</span>
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
                                        <Link to={"https://github.com/divyanshu-mahto/Email-service-aws-spring-boot"} target='_blank' className='github-link'>Github</Link>
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
                            <li>Managing cloud services via the AWS Console.</li>
                            <li>Integrating AWS services into Spring Boot using the AWS Java SDK.</li>
                        </ul>
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default Project_AWS_SES