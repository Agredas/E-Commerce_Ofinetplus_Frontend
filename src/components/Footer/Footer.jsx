import React from 'react';
import './Footer.scss';
import linkedin from '../../img/linkedin.png'


function Footer() {
  return (
    <div className="footer">
        <div className="footerContainer">
          <div className="footerLogo">
            <h4>E-commerce Ofinetplus</h4>
          </div>
          <div className="footerContent">
            <span>
              Un proyecto realizado por:{" "}
              <img src={linkedin} className="linkedin"></img>    
              <a target="_blank" href="https://www.linkedin.com/in/agredas/">
                {" "}
                Andrea Ágredas{" "}
              </a>
                        
            </span>
          </div>
        </div>
    </div>
  );
}

export default Footer;