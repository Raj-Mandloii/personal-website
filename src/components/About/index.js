import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import "./index.scss"
import { faCss3, faGithub, faHtml5, faJsSquare, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons"

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return (
        <div className='container about-page'>

            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"About me".split("")}
                        idx={15} />
                </h1>
                <p>My name is Raj and I am a software engineer specialized in front-end and back-end applications.</p>
                <p>I acquired a strong knowledge and expertise in this field over time. Software quality, scalability and Service Oriented Architecture are subjects that fascinate me. </p>
                <p>Generally speaking, I love working and sharing on topics related to software architecture and software quality.</p>
                <p>I like to see myself as a passionate developer, and an eternal learner.</p>

            </div>
            <div className='stage-cube-cont'>

                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faNodeJs} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGithub} color="#EC4E28" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About