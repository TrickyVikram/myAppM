import React from 'react'


import Navbar from './Navbar';
import Footer from './Footer'; 

function About() {
  return (
    <div>
    
 <Navbar/>
<div style={{textAlign:'center', height:"21em"}}>
<p className='pt-5'  style={{ fontSize: "60px", fontWeight: "bold", lineHeight: "80px" }}>About contant</p>

</div>


 <Footer/>
    </div>
  )
}

export default About;