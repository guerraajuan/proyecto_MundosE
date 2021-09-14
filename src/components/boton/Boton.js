import React from 'react';
import "./boton.scss";


const Boton = ({text,handlerClick}) =>{
    return(
        <button className="boton" onClick={handlerClick}>
            {text}
        </button>

    );
}

export default Boton;