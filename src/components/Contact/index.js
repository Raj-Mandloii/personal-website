import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import "./index.scss";
import emailjs from "@emailjs/browser"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_7tglias",
            'template_tqsvmil',
            refForm.current,
            '6CgOzC-nDXjktgAEd'
        ).then(() => {
            alert("Message successfully sent!")
            window.location.reload(false);
        }, () => {
            alert("Failed to sent the message, please try again")
        })
    }

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
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>

                    </div>
                </div>
                <div className='info-map'>
                    Raj Mandloi,
                    <br/>
                    Indore, Madhya Pradesh,
                    <br/>
                    India
                    <br/>
                    <span>rajmandloi1232@gmail.com</span>


                </div>
                <div className='map-wrap'>
                    <MapContainer center={[22.7196, 75.8577]} zoom={13}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                        <Marker position={[22.7196, 75.8577]}>
                            <Popup>Raj Mandloi lives here, come over for a cup of ☕ Tea 🍵</Popup>
                        </Marker>
                    
                    </MapContainer>

                </div>

            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact