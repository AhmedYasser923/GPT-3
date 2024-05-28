import React from 'react';
import './article.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Article = ({imgUrl,date,title}) => {
    useEffect(()=>{
    Aos.init({duration: 900});
  },[]);
  return (
    <div className="gpt3__blog-container_article" data-aos="zoom-in-up">
       <div className="gpt3__blog-container_article-image">
        <img src={imgUrl}></img>
       </div>
       <div className="gpt3__blog-container_article-content">
        <p>{date}</p>
        <h3>{title}</h3>
       <p>Read full article</p>
       </div>
    </div>
  )
}

export default Article;