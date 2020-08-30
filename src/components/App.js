import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

function App() {
    // React.useEffect(() => {
    //     const hamburger = document.querySelector(".hamburger");
    //     const navLinks = document.querySelector(".nav-links");
    //     const links = document.querySelectorAll(".nav-links li");
    //     hamburger.addEventListener('click', () => {
    //         hamburger.classList.toggle('close');

    //         navLinks.classList.toggle("open");
    //         links.forEach(link => {
    //             link.classList.toggle('fadess')
    //         })

    //     })
    // })
    // React.useEffect(()=>{
    // //     const fb = document.querySelector(".hamburger");

    // })

    return (
        <nav class="navbar navbar-expand-sm navbar-light py-3 bg-nav">
            <a href="/" class="navbar-brand ml-3">Mine EKİCİ</a>
            <button class="first-button" type="button" data-toggle="collapse" data-target="#navbarMenu"
                aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation" style={{color:"red"}}>
                <div class="animated-icon1 nav-button"><span></span><span></span><span></span></div>
            </button>
            <div class="collapse navbar-collapse navbar-toggleable-sm" id="navbarMenu">
                <ul class="navbar-nav ml-auto">

                    <li class="navbar-item px-3"><a href="/about" class="nav-link">About</a></li>
                    <li class="navbar-item px-3"><a href="/contact" class="nav-link">Contact</a></li>
                    <li class="navbar-item px-3"><a href="/portfolios" class="nav-link">Portfolios</a></li>

                </ul>
            </div>
        </nav>
    );
}

export default App;
/***/
/**<div className="nav">
                <div className="hamburger icon">
                    <div className="line top"></div>
                    <div className="line middle"></div>
                    <div className="line bottom"></div>
                </div>
                <div className="logo-div"><label className="logo"><a href="/" className="logo-link">Mine EKİCİ</a></label></div>
                <div className="nav-links"><ul>
                <li><Link to="/about" activeStyle={{color:"red"}}>About</Link></li>
                <li><Link to="/contact" activeStyle={{color:"red"}}>Contact</Link></li>
                <li><Link to="/portfolios" activeStyle={{color:"red"}}>Portfolios</Link></li>
            </ul></div>

            </div> */