import React, { Fragment } from 'react';
import './header.scss';
import Logoh from "./assets/top-logo.svg";
import Boton from '../boton/Boton';

export default function Header (){
    return(

        <Fragment>

            <div className="container-header">
                <div className="linea-h">
                    <div className="container-h flex-row-h ">
                        <img src={Logoh} alt="logotipo"/>
                        <nav>
                            <ul class="nav-ul flex-row-h ">

                                <a href="#about">
                                    <li>Home</li>
                                </a>

                                <a href="#about">
                                    <li>About</li>
                                </a>

                                <a href="#products">
                                    <li>Products</li>
                                </a>    

                                <a href="#services">
                                    <li>Services</li>
                                </a>

                                <a href="#formulario">
                                    <li class="li-especial">Contact</li>
                                </a>
                            </ul>
                        </nav>
                    </div>
                </div>
                
                <div className="container-h">

                    <h1 className=" h1-header">Sed ut perspiciatis <br/> unde omnis iste natus</h1>
                    <p className="comentario">Lorem , ipsum dolor sit amet consectetur adipisicing elit <br/> Accusamus aliquam facere.</p>
                    <Boton text="Read more"  ></Boton>

                 </div>


           
        </div>
    </Fragment>





    )






}