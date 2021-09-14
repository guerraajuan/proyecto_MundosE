import React from 'react';
import Logo from "./footer-logo.svg";
import "./footer.scss";

const Footer = () =>{
    return(
        <div className="footer">

            <div className="contenido">
                <span>2020 c All rights reserved. </span>
                <img src={Logo} alt="logotipo"/>
            </div>
            
            
        </div>
    )

}

export default Footer;