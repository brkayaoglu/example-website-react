import React from 'react';

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
                <label className="logo"><a href="/" className="logo-link">Mine Ekici</a></label>
                <ul className="nav-links">
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/portfolios">Portfolios</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default App;

