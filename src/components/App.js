import React, { useState } from 'react';

function App() {
    var open = true;
    React.useEffect(() => {
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");
        const carousel = document.getElementById("carousel");
        const footer = document.getElementById("footer");
        hamburger.addEventListener('click', () => {
            if (open) {
                hamburger.classList.toggle('close');
                // var timePeriodInMs = 300;
                // setTimeout(function () {
                     
                //      carousel.classList.toggle('display')
                // },
                //     timePeriodInMs);
                //     timePeriodInMs = 300;
                //     setTimeout(function () {
                     
                //         footer.classList.toggle('display');
                //    },
                //        timePeriodInMs);
                    
                navLinks.classList.toggle("open");
                links.forEach(link => {
                    link.classList.toggle('fadess')
                })
                open = !open;
            } else {
                hamburger.classList.toggle('close');
                // var timePeriodInMs = 100;
                // setTimeout(function () {
                //     // footer.classList.toggle('display');footer.classList.toggle('display');
                //     carousel.classList.toggle('display')
                // },
                //     timePeriodInMs);
                 navLinks.classList.toggle("open");
                // footer.classList.toggle('display');
                links.forEach(link => {
                    link.classList.toggle('fadess')
                })
                open = !open;
            }
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
                <label className="logo">Mine Ekici</label>
                <ul className="nav-links">

                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>

            </nav>

        </div>
    );
}

export default App;

