import React, { Fragment } from 'react';
import "./products.scss";
import img3 from "./assets/section3-image.png";


const Products = () =>{
    return(
        <Fragment>

            <div className="container-products" >

                <div className="fondo" >
                    <div className="div-p1" />
                    <div className="div-p2"/>
                </div>
               

                <div className="products-img" id="products">

                    <img src={img3} alt="Img products" className="img-3" />

                </div>

            </div>
            

        </Fragment>

    )
}

export default Products;