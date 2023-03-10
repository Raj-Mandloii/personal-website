import "./index.scss"
import LogoTitle from "../../assets/images/r-logo.png"
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import AnimatedLetters from '../AnimatedLetters/index'
import Logo from "./Logo/index"
import Loader from "react-loaders"
const Home = () => {
    const [letterClass, setLetterClass] = useState("text-animate")
    const nameArray = "mandloi".split("")
    const jobArray = "web developer.".split("")

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass("text-animate-hover")
        }, 4000)
    }, [])
    return (
        <>

            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img style={{width:"42px",paddingRight:"1rem"}} src={LogoTitle} alt="developer" />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={jobArray}
                            idx={22}
                        />
                        <br />
                        
                    </h1>
                    <h2>Frontend Developer / JavaSript Developer / Flutter Developer</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
                <Logo />
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Home;