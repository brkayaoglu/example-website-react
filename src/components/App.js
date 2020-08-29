import React from 'react';
import {Link} from 'react-router-dom';

function App() {
    React.useEffect(() => {
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('close');

            navLinks.classList.toggle("open");
            links.forEach(link => {
                link.classList.toggle('fadess')
            })

        })
    })

    return (
        <div className="App">
            <nav>
                <div className="hamburger icon">
                    <div className="line top"></div>
                    <div className="line middle"></div>
                    <div className="line bottom"></div>
                </div>
                <label className="logo"><a href="/" className="logo-link">Mine EKİCİ</a></label>
                <ul className="nav-links">
                    <li><Link to="/about" activeStyle={{color:"red"}}>About</Link></li>
                    <li><Link to="/contact" activeStyle={{color:"red"}}>Contact</Link></li>
                    <li><Link to="/portfolios" activeStyle={{color:"red"}}>Portfolios</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default App;

