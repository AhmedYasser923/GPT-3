import React, { useEffect } from 'react'
import './possibility.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import  PossibilityImage from '../../assets/possibility.png';
const Possibility = () => {
  useEffect(()=>{
    Aos.init({duration: 900});
  },[]);
  return (
    <div className="gpt3__possibility section__padding">
      <div className="gpt3__possibility-img" data-aos="fade-right">
        <img src={PossibilityImage} alt='image'></img>
      </div>
      <div className="gpt3__possibility-content"data-aos="fade-left">
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>


    </div>
  )
}

export default Possibility