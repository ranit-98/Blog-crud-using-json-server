import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
   <>
     <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="index.html">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto py-4 py-lg-0">
                        <li class="nav-item"><Link class="nav-link px-lg-3 py-3 py-lg-4" to="/">Home</Link></li>
                        <li class="nav-item"><Link class="nav-link px-lg-3 py-3 py-lg-4" to="/about">About</Link></li>
                        <li class="nav-item"><Link class="nav-link px-lg-3 py-3 py-lg-4" to="/write-blog">Write blog</Link></li>
                        <li class="nav-item"><Link class="nav-link px-lg-3 py-3 py-lg-4" to="/">Login</Link></li>
                        <li class="nav-item"><Link class="nav-link px-lg-3 py-3 py-lg-4" to="/">Register</Link></li>
                        <li class="nav-item"><Link class="nav-link px-lg-3 py-3 py-lg-4" to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
   
   </>
  )
}

export default NavBar
