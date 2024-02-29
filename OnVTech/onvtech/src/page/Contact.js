import React, { useState } from 'react'

import Navbar from './Navbar'
import Footer from './Footer'
export default function Contact() {

  const [contact, setContact] = useState({});

  function onChange(e) {

 setContact({
...Contact,
[e.target.name]:e.target.value

 })

  }

  function submit() {


  }


  return (
    <div>
      <Navbar />
      <div className='container py-5'>
        <div className="d-flex justify-content-between flex-wrap pb-5">
          <div className=" text-start w-50 " style={{ width: "28rem" }}>
            <p className='pt-5' style={{ fontSize: "60px", fontWeight: "bold", lineHeight: "80px" }}>Contact Us</p>
            <p style={{ color: "grey" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe explicabo perspiciatis ex vel rem quo </p>
            <div className='d-flex' style={{ justifyContent: "space-between" }}>
              <div className="card border-0" style={{ width: "18rem", marginRight: "15px" }}>
                <div className="card-body">
                  <div className="card-title"><i className="fa-solid fa-location-dot mt-1" style={{ fontSize: "45px", textAlign: "center", color: "#f29f05" }}></i>
                    <p className='mt-3' style={{ fontSize: "15px", fontWeight: "600" }}>
                      Madhubani ,Bihar , India
                    </p>
                  </div>


                </div>
              </div>
              <div className="card border-0" style={{ width: "18rem", marginRight: "15px" }}>
                <div className="card-body">
                  <div className="card-title"><i className="fa-solid fa-envelope mt-1" style={{ fontSize: "45px", textAlign: "center", color: "#f29f05" }}></i>
                    <p className='mt-3' style={{ fontSize: "15px", fontWeight: "600" }}>
                      vkumarsah999@gmail.com
                    </p>
                  </div>


                </div>
              </div>
              <div className="card border-0" style={{ width: "18rem", marginRight: "15px" }}>
                <div className="card-body">
                  <div className="card-title"><i className="fa-solid fa-phone mt-1" style={{ fontSize: "45px", textAlign: "center", color: "#f29f05" }}></i>
                    <p className='mt-3' style={{ fontSize: "15px", fontWeight: "600" }}>
                      +91 7479931246
                    </p>
                  </div>


                </div></div>






            </div>

          </div>
          <div style={{ width: "28rem" }}>

          </div>
        </div>

        <div style={{ paddingBottom: "50px", paddingTop: "50px" }}>
          <div className="card " >

            <div className="card-body d-flex">

              <div className="w-50">
                <p className="text-start m-0" style={{ fontWeight: "bold", fontSize: "30px" }}>
                  Get in touch with us
                </p>

                <div className="name-form m-0 p-0 pt-4" style={{ position: "relative" }}>
                  <input
                    className=" m-0"
                    type="text"
                    placeholder="Enter your name"
                    name='name'
                    onChange={onChange}
                    style={{
                      width: "100%",
                      height: "50px",
                      color: "#cfcfcf",
                      border: "1px solid #cfcfcf",
                      borderRadius: "5px",
                      paddingLeft: "40px",
                      fontSize: "20px"


                    }}
                  />
                  <i
                    className="fa-regular fa-user pt-4"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "10px",
                      transform: "translateY(-50%)",
                      zIndex: 1,
                      fontSize: "20px",
                      color: "#cfcfcf"
                    }}
                  ></i>
                </div>
                 <form action=""></form>     
                <div className="name-form m-0 p-0 pt-4" style={{ position: "relative" }}>
                  <input
                    className=" m-0"
                    type="email"
                    placeholder="Enter your email" name='email'
                    onChange={onChange}
                    style={{
                      width: "100%",
                      height: "50px",
                      color: "#cfcfcf",
                      border: "1px solid #cfcfcf",
                      borderRadius: "5px",
                      paddingLeft: "40px",
                      fontSize: "20px"


                    }}
                  />
                  <i
                    className="fa-regular fa-envelope pt-4"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "10px",
                      transform: "translateY(-50%)",
                      zIndex: 1,
                      fontSize: "20px",
                      color: "#cfcfcf"
                    }}
                  ></i>
                </div>

                <div className="name-form m-0 p-0 pt-4" style={{ position: "relative" }}>
                  <textarea
                    className=" m-0"
                    type="text"
                    placeholder="Enter your message"
                    name='massage'
                    onChange={onChange}
                    style={{
                      width: "100%",
                      height: "50px",
                      color: "#cfcfcf",
                      border: "1px solid #cfcfcf",
                      borderRadius: "5px",
                      paddingLeft: "40px",
                      fontSize: "20px"

                    }}
                  />

                </div>
                <div className="name-form m-0 p-0 pt-4" style={{ position: "relative" }}>

                  <input className=" m-0" type="submit" value="Submit  Application" style={{
                    width: "100%",
                    height: "50px",
                    backgroundColor: "#f29f05",
                    color: "white",
                    border: "1px solid #cfcfcf",
                    borderRadius: "5px",
                    paddingLeft: "20px",
                    fontSize: "20px"


                  }} />
                </div>
              </div>

              <div className="map w-50">

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
