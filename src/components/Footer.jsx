import React from "react"
import '../css/footer.css'
import iconFacebook from '../assets/icons/facebook.png'
import iconLinkedin from '../assets/icons/linkedin.png'
import iconTwiiter from '../assets/icons/twitter.png'
const Footer = (props) => {
  return (
    <div className="footer">
      <div className="logo-text">
        <h3><span className="aPlus-footer">A+ </span>Studio</h3>
        <p>Leading digital agency with solid design and development expertise.
          We build readymade websites, mobile applications, and elaborate online business services.</p>
        <div className="footer-icons">
          <img src={iconFacebook} />
          <img src={iconLinkedin} />
          <img src={iconTwiiter} />
        </div>
      </div>
      <div className="footer-we-do list ">
        <h4>What We Do</h4>
        <ul className="list">
          <li>Web Design </li>
          <li>App Design </li>
          <li>Social Media Manage </li>
          <li>Market Analysis Project</li>

        </ul>
      </div>
      <div className="footer-company list">
        <h4>Company</h4>
        <ul className="list">
          <li>About us </li>
          <li>Career </li>
          <li>Become investor </li>


        </ul>
      </div>
      <div className="footer-support list">
        <h4>Suport</h4>
        <ul className="list">
          <li>FAQ </li>
          <li>Policy </li>
          <li>Business</li>


        </ul>
      </div>
      <div className="footer-contact list">
        <h4>Contact</h4>
        <ul className="list">
          <li>WhatsApp</li>
          <li>Support 24</li>
        </ul>
      </div>
    </div>
  )
};

export default Footer;
