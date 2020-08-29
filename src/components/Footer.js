import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';

function SocialFollow() {
    return (
        <div className="social-container" id="footer">
            <div className="footer-header">
                <p className="footer-parag">Mine Ekici Portfolio. City and Urban Planner.
        </p>
                <p className="footer-parag">
                    © Mine Ekici
        </p>
            </div>
            <div className="footerIcons">
                <a href="https://www.youtube.com/?hl=tr&gl=TR" className="social" id="youtubeLogo">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://www.facebook.com/Mineekc" className="social" id="facebookLogo">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.twitter.com" className="social" id="twitterLogo">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.instagram.com/peregrinatewithmin/" className="social" id="instagramLogo">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </div>
        </div>
    )
}

export default SocialFollow;