import React from 'react'

import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer'; 

function service() {
  return (
    <div>
    
 <Navbar/>
<div style={{textAlign:'center', height:"21em"}}>
<p className='pt-5'  style={{ fontSize: "60px", fontWeight: "bold", lineHeight: "80px" }}>Service contant</p>
<Link to='/' style={{width:"500px",height:"500px"}}> Home</Link>
</div>


 <Footer/>
    </div>
  )
}

export default service;