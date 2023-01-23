import React from "react"
import '../css/client.css'
import mainClient from '../assets/clients/mainClient.png'
const Client = (props) => {
  return (
    <div className="client">
      <h2>What our happy client say</h2>
      <p>Several selected clients, who already believe in our service</p>
      <div className="left-client">
      <img src={mainClient}/>
      <div className="left-client-ajust">
      <h3>Matthew Paul</h3>
      <p>Perfect, very good job! Thank you for the amazing design and work. 
        Really impressed with the high quality and quick turnaround time. Highly recommend.</p>
        <div className="dot-group">
        <span className="dot"></span>
  <span className="dot"></span>
  <span className="dot"></span>
  <span className="dot"></span>
  </div>
        </div>
      </div>
      <div className="group-clients">

      </div>
      
    </div>
  )
};

export default Client;
