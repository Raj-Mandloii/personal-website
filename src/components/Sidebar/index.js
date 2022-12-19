import "./index.scss"

import React from 'react'
import { Link } from "react-router-dom"
import LogoS from "../../assets/images/logo-s.png"
import LogoSubTitle from "../../assets/images/logo_sub.png"

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to={'/'}>
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubTitle} alt="slobodan" />
      </Link>
      
    </div>
  )
}


export default Sidebar