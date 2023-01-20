
import presentation from '../assets/header/presentation.png'
import '../css/header.css';
function Header() {


  return (
    <div className="Header">

    <main>
    <nav className="navBar">
        <img className="logoStudio" src=''/>
        <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">What We Do</a>
  <a href="#contact">Service</a>
  <a href="#blog">Blog</a>
  <a href="#contact">Contact</a>
  <a href="#project">Project</a>
</div>
    </nav>

    <div className="header-group">
    <div className="presentationText">
    <h2>A Digital Product Agency</h2>
    <p>Leading digital agency with solid design and development expertise.
     We build readymade websites, mobile applications, and elaborate online business services.</p>
     <button>Contact Now</button>

    </div>
    <div className="photo">
        <img src={presentation}/>

<div className="icons-group">
    <h2>Our Client</h2>
</div>
    </div>

    </div>


    </main>
    </div>
  )
}

export default Header

import React from "react"

