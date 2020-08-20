import React from 'react';
import './style.css';
import Slider from './Slider'; // <Slider />


const Navbar2 = () => {
  return (
    <nav>
    <input type="checkbox" id="check"/>
    <label for="check" className="checkBtn">
    <i className="fas fa-bars"></i>
    </label>
        <label className="logo">Mine Ekici</label>
        <ul>
            <li><a href="#">Work</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>

        </ul>
    </nav>
  )
}

export default Navbar2;
