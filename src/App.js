import React from "react";
import {Article, Brand , Cta , Feature , Navbar} from './components'
import {Blog , Features , Footer ,Header, Possibility ,WhatGPT} from './containers'
import './App.css'
const App = () => {
  return <div classNmae='APP'>
  <div className='gradient__bg'>
 <Navbar></Navbar>
 <Header></Header>
 </div>
 <Brand></Brand>
 <WhatGPT></WhatGPT>
 <Features></Features>
 <Possibility></Possibility>
 <Cta></Cta>
 <Blog></Blog>
 <Footer></Footer>
 

  </div>;
};

export default App;
