import React from "react"
import '../css/info.css'
import retangleInfo from '../assets/info/retangle-info.png'
import bgRetangle from '../assets/info/bg-retangle.png'
import boxSearch from '../assets/info/boxSearch.png'
import codeIcon from '../assets/info/codeIcon.png'
import emptyWallet from '../assets/info/emptyWallet.png'
import chartSquare from '../assets/info/chartSquare.png'
import elipse from '../assets/info/elipse.png'
import Zoom from 'react-reveal/Zoom';
const Info = (props) => {
  ScrollReveal().reveal('.info');
  // <img className="bgRetangle" src={bgRetangle} />
  return (
    <section className="info">
      <Zoom>
        <div className="left-info">
          <div className="info-description">

            <h2>How can we help your Business?</h2>
            <img className="retangle-info" src={retangleInfo} />
            <p>We build readymade websites, mobile applications,
              and elaborate online business services.</p>

          </div>
        </div>
        <div className="right-info">


          <div className="bgRetangle">
            <div className="group-div-1">
              <Zoom>
                <div className="business">

                  <img src={boxSearch} />
                  <h1>Business Planning</h1>
                  <p>We present you a proposal and discuss niffty-gritty like</p>

                </div>
              </Zoom>
              <Zoom>
                <div className="web-dev">

                  <img src={codeIcon} />
                  <h1>Development Website and App</h1>
                  <p>Communication protocols apart from engagement models</p>

                </div>
              </Zoom>
            </div>
            <div className="group-div-2">
              <div className="financial">
                <Zoom>
                  <img src={emptyWallet} />
                  <h1>Financial Planning System</h1>
                  <p>Protocols apart from aengage models, pricing billing</p>
                </Zoom>
              </div>
              <Zoom>
                <div className="market">
                  <img src={chartSquare} />
                  <h1>Market Analysis Project</h1>
                  <p>Protocols apart from aengage models, pricing billing</p>
                </div>
              </Zoom>
              <img className="elipse" src={elipse} />
            </div>
          </div>

        </div>
      </Zoom>
    </section>
  )
};

export default Info;
