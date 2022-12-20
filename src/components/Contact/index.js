import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import "./index.scss"
const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={"Contact me".split("")}
                            idx={15}
                            letterClass={letterClass} />
                    </h1>
                    <p>I'm actively looking for any new opportunities in Full Stack Web Development. If you have any project or opportunity, then please connect with me via any of the platform below :)</p>
                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name='email' placeholder='Email' required />
                                </li>
                                <li >
                                    <input type="email" name='email' placeholder='Subject' required />
                                </li>
                                <li >
                                   <textarea placeholder='Message' name='message' required/>
                                </li>
                                <li >
                                   <input type='submit' placeholder='Message' name='message' required className='flat-button' value='SEND'/>
                                </li>
                            </ul>
                        </form>

                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact