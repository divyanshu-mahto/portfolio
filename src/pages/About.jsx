import React from 'react'
import { Link } from 'react-router-dom'
import './stylesheets/About.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const About = () => {

    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
    }, [location.pathname]);

    
  return (
    <>
    <div className='container'>
        <Navbar/>
        <div className='about-page-container'>
            
            <div className='page-info-outer-container'>
                <div className='page-heading-container'>
                    <p className='page-heading'>About</p>
                    <p className='page-subheading'>thanks for snapping a look </p>
                    <p className='page-subheading'>let’s get in touch</p>
                </div>
                <div className='social-link'>
                    <div className='arrow'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
            <path d="M10.2828 3.78284C10.4391 3.62663 10.4391 3.37337 10.2828 3.21716L7.73726 0.671574C7.58105 0.515364 7.32778 0.515364 7.17157 0.671574C7.01536 0.827783 7.01536 1.08105 7.17157 1.23726L9.43431 3.5L7.17157 5.76274C7.01536 5.91895 7.01536 6.17222 7.17157 6.32843C7.32778 6.48464 7.58105 6.48464 7.73726 6.32843L10.2828 3.78284ZM-3.49691e-08 3.9L10 3.9L10 3.1L3.49691e-08 3.1L-3.49691e-08 3.9Z" fill="black"/>
            </svg>
                    </div>
                    <Link to={"https://www.linkedin.com/in/divyanshu-mahto"} target='_blank' className='link-text'>
                        Linkedin
                    </Link>
                </div>
                <div className='social-link'>
                    <div className='arrow'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
            <path d="M10.2828 3.78284C10.4391 3.62663 10.4391 3.37337 10.2828 3.21716L7.73726 0.671574C7.58105 0.515364 7.32778 0.515364 7.17157 0.671574C7.01536 0.827783 7.01536 1.08105 7.17157 1.23726L9.43431 3.5L7.17157 5.76274C7.01536 5.91895 7.01536 6.17222 7.17157 6.32843C7.32778 6.48464 7.58105 6.48464 7.73726 6.32843L10.2828 3.78284ZM-3.49691e-08 3.9L10 3.9L10 3.1L3.49691e-08 3.1L-3.49691e-08 3.9Z" fill="black"/>
            </svg>
                    </div>
                    <Link to={"https://github.com/divyanshu-mahto"} target='_blank' className='link-text'>
                        Github
                    </Link>
                </div>
                <div className='social-link'>
                    <div className='arrow'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
            <path d="M10.2828 3.78284C10.4391 3.62663 10.4391 3.37337 10.2828 3.21716L7.73726 0.671574C7.58105 0.515364 7.32778 0.515364 7.17157 0.671574C7.01536 0.827783 7.01536 1.08105 7.17157 1.23726L9.43431 3.5L7.17157 5.76274C7.01536 5.91895 7.01536 6.17222 7.17157 6.32843C7.32778 6.48464 7.58105 6.48464 7.73726 6.32843L10.2828 3.78284ZM-3.49691e-08 3.9L10 3.9L10 3.1L3.49691e-08 3.1L-3.49691e-08 3.9Z" fill="black"/>
            </svg>
                    </div>
                    <Link to={"mailto:divyanshukm17@gmail.com"} target='_blank' className='link-text'>
                        Email
                    </Link>
                </div>
        
            </div>


            <div className='about-page-content'>
                <div className='introduction-contanier'>
                    <div className='profile-image-placeholder'>
                        <img src="/images/profile-image.png"/>
                    </div>
                    <div className='intro-text'>
                        <div className='intro-heading'><i>Hi there,</i> I’m Divyanshu</div>
                        <div className='intro-content'>just a little bit about me - I am natively from Bihar, but currently based in Tamil Nadu studying Information Technology.<br/><br/> 

Most of the time i am attending classes but In my<br/> spare time, you can find me watching web-series, playing football and scrolling X</div>
                    </div>
                </div>
                <div className='about-section-2-container'>
                    <div className='section-2-text'>
                        <div className='section-2-heading'>Fun facts about me</div>
                        <div className='section-2-content'>i still use wired earphones<br/>
                            listening to music on repeat<br/>
                            and yes i watch F1 
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
        <Footer/>
    </>
    
  )
}

export default About