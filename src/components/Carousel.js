import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../pics/1.jpg';
import img2 from '../pics/2.jpg';
import img3 from '../pics/3.png';
import img4 from '../pics/4.jpg';
import img5 from '../pics/5.jpg';


function Carousel() {
    return (
        <div id="carousel">
            <OwlCarousel
                className="owl-theme"
                loop
                items = "1"
                autoPlay
                nav
                rewind
                navText = {
                    [
                        '<i class="fa fa-angle-left owl-prev prev-a" aria-hidden="true"></i>',
                        '<i class="fa fa-angle-right owl-next prev-a" aria-hidden="true"></i>'
                    ]
                }
                navContainerClass={[".owl-prev",".owl-next"]}
                responsive = {
                    {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 1
                        },
                        1000: {
                            items: 1
                        }
                    }
                }
            >
                <div class="item"><img src={img1} alt="1" className="itemk"/></div>
                <div class="item"><img src={img2} alt="2" className="itemk"/></div>
                <div class="item"><img src={img3} alt="3" className="itemk"/></div>
                <div class="item"><img src={img4} alt="4" className="itemk"/></div>
                <div class="item"><img src={img5} alt="5" className="itemk"/></div>
            </OwlCarousel>
        </div>
    );
}

export default Carousel;

