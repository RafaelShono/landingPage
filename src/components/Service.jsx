import '../css/service.css'
import  retangleService from '../assets/service/retangle-service.png'
import elipseService from '../assets/service/elipse-service.png'
const Service = (props) => {
    return (
      <div className="service">
        <div className="video-side">
        <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
        height={400}
        width={500}/>
        <img className='elipseService' src={elipseService}/>
        </div>
  <div className="text-side">
  <img className='retangleService' src={retangleService}/>
    <h2>Great Digital Product Agency since 2016 </h2>
   
    <p>Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals.
       Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements.</p>
    </div>          
        
      </div>
    )
  };
  
  export default Service;
  // rfc