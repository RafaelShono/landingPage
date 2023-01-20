import React from "react"
import '../css/info.css'
import retangleInfo from '../assets/info/retangle-info.png'
import bgRetangle from '../assets/info/bg-retangle.png'
import boxSearch from '../assets/info/boxSearch.png'
import codeIcon from '../assets/info/codeIcon.png'
import emptyWallet from '../assets/info/emptyWallet.png'
import chartSquare from '../assets/info/chartSquare.png'
import elipse from '../assets/info/elipse.png'
const Info = (props) => {
  return (
    <section className="info">
      <div className="left-info">
        <div className="info-description">

          <h2>How can we help your Business?</h2>
          <img className="retangle-info" src={retangleInfo} />
          <p>We build readymade websites, mobile applications,
            and elaborate online business services.</p>

        </div>
      </div>
      <div className="right-info">

        <img className="bgRetangle" src={bgRetangle} />
        <div className="group-div-1">
          <div className="business">
            <img src={boxSearch} />
            <h1>Business Planning</h1>
            <p>We present you a proposal and discuss niffty-gritty like</p>

          </div>
          <div className="web-dev">
            <img src={codeIcon} />
            <h1>Development Website and App</h1>
            <p>Communication protocols apart from engagement models</p>

          </div>
        </div>
        <div className="group-div-2">
          <div className="financial">
            <img src={emptyWallet} />
            <h1>Financial Planning System</h1>
            <p>Protocols apart from aengage models, pricing billing</p>

          </div>
          <div className="market">
            <img src={chartSquare} />
            <h1>Market Analysis Project</h1>
            <p>Protocols apart from aengage models, pricing billing</p>
          </div>
          <img className="elipse" src={elipse} />
        </div>
      </div>


    </section>
  )
};

export default Info;
