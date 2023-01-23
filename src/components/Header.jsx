
import presentation from '../assets/header/presentation.png'
import dotOrnament from '../assets/header/dotOrnament.png'
import googleLogo from '../assets/header/googleLogo.png'
import aibnbLogo from '../assets/header/aibnbLogo.png'
import uberEatsLogo from '../assets/header/uberEatsLogo.png'
import amazonLogo from '../assets/header/amazonLogo.png'


import '../css/header.css';
function Header() {


  return (
    <div className="Header">

      <main>
        <nav className="navBar">
        <p className='name-header'><span>A+ </span>Studio</p>
          <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#news">What We Do</a>
            <a href="#contact">Service</a>
            <a href="#blog">Project</a>
            <a href="#contact">Blog</a>
            <a href="#project">Contact</a>
          </div>
        </nav>
<div className='both-side'>
        <div className="header-group">
          <div className="presentation-text">
            <h1>A Digital Product Agency</h1>
            <p>Leading digital agency with solid design and development expertise.
              We build readymade websites, mobile applications, and elaborate online business services.</p>
            <button className='btn-header'>Contact Now</button>
           
            <img className='dot-ournament' src={dotOrnament} />
          </div>
    
     
        <div className='photo'>
        <div className='header-circle'></div>
        <img src={presentation} />
        <div className='header-circle-2'></div>
            </div>
      
         
        
        </div>
        <div className='clients-section'>
        <h2 className='our-client'>Our Client</h2>
        <div className="icons-clients">
          <p>Several selected clients, who already believe in our service.</p>
          <div className='icons-header'>
            <img className='group-icons-header' src={googleLogo} />
            <img className='group-icons-header' src={aibnbLogo} />
            <img className='group-icons-header' src={uberEatsLogo} />
            <img className='group-icons-header' src={amazonLogo} />
          </div>
        </div>
        </div>
        </div>
        
      </main>
    </div>
  )
}

export default Header

import React from "react"

