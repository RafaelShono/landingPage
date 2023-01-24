import React from "react"
import { Input } from 'react-nice-inputs'
import '../css/client.css'
import mainClient from '../assets/clients/mainClient.png'
import client1 from '../assets/clients/client1.png'
import client2 from '../assets/clients/client2.png'
import client3 from '../assets/clients/client3.png'
import client4 from '../assets/clients/client4.png'
import client5 from '../assets/clients/client5.png'
import client6 from '../assets/clients/client6.png'
import client7 from '../assets/clients/client7.png'
import client8 from '../assets/clients/client8.png'
import elipse from '../assets/clients/elipse-client.png'
import triangleClient from '../assets/clients/client-retangle.png'
const Client = (props) => {

  function showText() {
    console.log("show me some text on the scrren")


  }

  return (
    <div className="client">

      <h2 className="client-text-center client-text-center-h1">What our happy client say</h2>
      <p className="client-text-center client-text-center-p ">Several selected clients, who already believe in our service</p>

      <div className="client-section">
        <div className="left-client">
          <img src={mainClient} />
          <img className="elipse-client" src={elipse} />
          <div className="left-client-ajust">
            <h3>Matthew Paul</h3>
            <p>Perfect, very good job! Thank you for the amazing design and work.
              Really impressed with the high quality and quick turnaround time. Highly recommend.</p>
            <div className="dot-group">
              <span className="dot blue-dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
        <div className="group-clients">
          <img className="client-1" src={client1} />
          <img className="client-2" src={client2} />
          <img className="client-3" src={client3} />
          <img className="client-4" src={client4} />
          <img className="client-5" src={client5} />
          <img className="client-6" src={client6} />
          <img className="client-7" src={client7} />
          <img className="client-8" src={client8} />
        </div>
     
      </div>
      <div className="newsletter">
        <div className="left-side-newletter">
          <h1>Subscribe Newsletter</h1>
          <p>I will update good news and promotion service not spam</p>
        </div>
        <div className="right-side-newsletter">
          <img src={triangleClient}/>
          <div className="element-box">
          <input placeholder="Enter your email address.." type="text" className="rinput-newslette"/>
        <button>Contact Now</button>
          </div>
     
        </div>
      </div>
    </div>
  )
};

export default Client;
