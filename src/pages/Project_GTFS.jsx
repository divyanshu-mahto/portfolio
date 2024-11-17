import React from 'react'
import { useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import './stylesheets/Project_Details.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Project_GTFS = () => {

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
                        <p className='project-title-heading'>Trip Planner using GTFS in Neo4j</p>
                        <p className='project-status'>IN DEVELOPMENT</p>
                    </div>

                    <div className='project-description'>A spring boot application that loads GTFS data into Neo4j graph database and provide trip planning api's</div>

                    <div className='big-image-placeholder'></div>

                    <div className='project-introduction-section'>
                        <div className='basic-introduction'>
                            <p className='basic-intro-heading'>Context</p>
                            <p className='basic-intro-text'>GTFS (General Transit Feed Specification) is public data of schedules and routes of transportation authorities and agencies (train, bus, metro). I studied many path-finding algorithms in my artificial intelligence course at university. I thought that why not try to apply some of those algorithms to find paths between two stops, but before that, I would need the data represented in the form of nodes and relations structured as a graph, so I looked up some graph databases and found Neo4j.
                                So I started learning Cypher, which is used to query the Neo4j database. Currently I am in the first phase of the project that is loading the GTFS data into the database. So far, I have successfully created nodes and relationships in the database based on the data and am learning the advanced Cypher queries to further interact with that data.
                            </p>
                            <p className='tech-stack'>Technologies used:
                                <span className='technologies'>  SpringBoot, Java, Neo4j</span>
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
                                        <Link to={"https://github.com/divyanshu-mahto/trip-planner-gtfs-neo4j"} target='_blank' className='github-link'>Github</Link>
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
                            <li>Working with Neo4j Graph Database to model data as nodes and relationships.</li>
                            <li>Using Cypher Query Language to interact with the Neo4j database.</li>
                            <li>Integrating Neo4j with Spring Boot using the Neo4j Java Driver.</li>
                        </ul>
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default Project_GTFS