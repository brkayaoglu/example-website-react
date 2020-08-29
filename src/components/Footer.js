import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    
    faFacebook,
    faLinkedin,

} from '@fortawesome/free-brands-svg-icons';

/**<p className="footer-parag">Portfolio
                 </p> */
function SocialFollow() {
    return (
        
        <div className="social-container" id="footer">
        
            <div className="footer-header">
                
            </div>
            <div className="footerIcons">
     
                <a href="https://www.facebook.com/Mineekc" className="social" id="facebookLogo">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/mine-ekici-16045415b/
                " className="social" id="linkedinLogo">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          
                
            </div>
        </div>
    )
}

export default SocialFollow;