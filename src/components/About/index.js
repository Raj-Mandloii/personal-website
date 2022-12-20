import React, { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import "./index.scss"

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
        </div>
    )
}

export default About