import React, { Fragment } from 'react';
import img4 from "./assets/section4-image.png";
import "./services.scss";
import Acordion from '../acordion/Acordion';

const Services = () =>{
    return(
        <Fragment>
            <div className="container-services" id="services">
                <div className="ser-g">
                    <div className="ser-1">
                    </div>

                    <div className="ser-2">
                        <img src={img4} alt="Img services" className="img-4" />
                    </div>

                </div>

                <div className="acor">
                    <Acordion></Acordion>

                </div>
               

               
            </div>
        </Fragment>
    )

}

export default Services;