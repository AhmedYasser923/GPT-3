
import './feature.css';
import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
const Feature = ({ title, text }) => {
  useEffect(()=>{
    Aos.init({duration: 900});
  },[]);
   return(

  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title" data-aos="zoom-in">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text" data-aos="zoom-in">
      <p>{text}</p>
    </div>
  </div>
   )
}
;

export default Feature;