import React from 'react'


export default function Footer() {
  return (
   
    <div class="container-fluid bg-dark text-light footer pt-8 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
            
                <div class="col-lg-2 col-md-6">
                    <h4 class="text-white mb-3">Quick Link</h4>
                    <a class="btn btn-link" href="/home">Home</a>
                    <a class="btn btn-link" href="/services">Services</a>
                    <a class="btn btn-link" href="/about">About</a>
                    <a class="btn btn-link" href="/contact">Contact</a>
                 
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-3">Contact</h4>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Madhubani,Bihar</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+91 7479931246</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>Vkumarsah999@gmail.com</p>
                    
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-3">Gallery</h4>
                    <div class="row g-2 pt-2">
                        <div class="col-10">
                            <img class="img-fluid bg-light p-1" src="https://cdn.pixabay.com/photo/2017/07/02/09/03/books-2463779_1280.jpg" alt=""/>
                        </div>
                        
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h4 class="text-white mb-3">Log In</h4>
                    <p>If you have already created account. Fill your E-mail Here and SignUp</p>
                    <div class="position-relative mx-auto"    >
                        <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <hr  style={{marginLeft:"30px" , marginRight:"30px" }} />
        <div class="container">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy;  2023  <a class="border-bottom" href="/">OnVTech</a> Private Limited. All Rights Reserved.<br/><br/>
                    </div>
                    <div class="col-md-6  " style={{paddingLeft:"400px"}}>
                    <div class="d-flex pt-0">
                        <a class="btn btn-outline-light btn-social" href="/"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social" href="/"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social" href="/"><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-outline-light btn-social" href="/"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}
