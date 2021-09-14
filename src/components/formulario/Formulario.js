import React, { Fragment, useState } from 'react';
import "./formulario.scss";
import ImgContacto from "./contact-image.png"
import Boton from '../boton/Boton';








const Formulario = () =>{

    let validaEmail = /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let validaPhone =/^([0-9]{10})+$/;
    var arregloDatos = {
        name:"",
        email:"",
        phone:"",
        message:""
    } ; // arreglo para guardar objetos con informacion del usuario
    


    const [nombre, setNombre] = useState({nombre:"", check:false});
    const [msjNombre, setMsjNombre] = useState("");
    const [email, setEmail] = useState({email:"", check:false});
    const [msjEmail, setMsjEmail] = useState("");
    const [phone, setPhone] = useState({phone:"", check:false});
    const [msjPhone, setMsjPhone] = useState("");
    const [msjBoton, setMsjBoton] = useState("");

    const handlerClick = (campo,iden) =>{
        switch(iden){
        case 1:
            if(campo === ""){
            setMsjNombre("El campo nombre no puede estar vacío");
        } 
        break; 

        case 2:
            if(campo === ""){
                setMsjEmail("El Email no es valido");
        } 
        break;
        
        case 3:
            if(campo === ""){
                setMsjPhone("El telefono no es valido");
        } 
        break;
    }  
    };

  





   

    const handlerChangeNombre = (Event) =>{
        
        const {value} = Event.target.value
        
        setNombre({value});

            if(Event.target.value !== ""){
                setMsjNombre("");
                setNombre({check:true});
            }
            else{
                setMsjNombre("El campo nombre no puede estar vacío");
                setNombre({check:false});
            }  

    };

    const handlerChangeEmail = (Event) =>{
            
            
            
        setEmail({email:Event.target.value});
        if(validaEmail.test(Event.target.value)){
            setMsjEmail("");
            setEmail({check:true});
        }
        else{
            setMsjEmail("El Email no es valido");
            setEmail({check:false});
          
        }   
        

    };

    const handlerChangePhone = (Event) =>{
            
            
            
        setPhone({phone:Event.target.value});
        if(validaPhone.test(Event.target.value)){
            setMsjPhone("");
            setPhone({check:true});
        }
        else{
            setMsjPhone("El telefono no es valido");
            setPhone({check:false});
        }   

    };
    const handlerClickBoton = ()=>{
        
    
        
       if(nombre.check && email.check && phone.check)
        {
            let formNombre = document.getElementById('name').value;
            let formEmail = document.getElementById('email').value;
            let formPhone = document.getElementById('phone').value;
            let formMessage = document.getElementById('message').value;
            arregloDatos.name= formNombre;
            arregloDatos.email = formEmail;
            arregloDatos.phone= formPhone;
            arregloDatos.message= formMessage;

            fetch('https://evening-reef-74314.herokuapp.com/',{
                method: 'POST',
                body:JSON.stringify(arregloDatos),
                headers:{
                    "content-type": "application/json"
                }

            })
            .then((response) => response.json())
            .then((json) => console.log(json));
            





            setMsjBoton("Sus datos fueron recibidos, recibirá un email de confirmacion");
            
        }
        else{
            setMsjBoton("Debe completar el formulario");

        }
        
         console.log(arregloDatos);
         console.log(JSON.stringify(arregloDatos));

    } 
   







    return(
        <Fragment>
            <div className="container-formulario" >
               
                <div className="fondo" >  

                     <div className="formulario">

                            <div className="title-formulario" >

                                <h2 className="t1 t" id="formulario"> Get in touch</h2>
                                <h2 className="t2 t">We are hiring!</h2>
                                <form className="forma" >
                                
                                    <input 
                                    className="entrada" 
                                    type="text" 
                                    placeholder="Name" 
                                    id="name"
                                    onClick={() => handlerClick(nombre.nombre,1)}
                                    onChange={(Event) => handlerChangeNombre(Event,)}
                                    value={nombre.nombre}
                                    autoComplete="off"
                                    />
                                    <p className="mensaje">{msjNombre}</p>

                                    <input className="entrada"
                                     type="email" 
                                     placeholder="Email" 
                                     id="email"
                                     autoComplete="off"
                                     onClick={() => handlerClick(email.email,2)}
                                     onChange={(Event) => handlerChangeEmail(Event)}
                                     value={email.email}/>
                                     <p className="mensaje">{msjEmail}</p>



                                    <input className="entrada"
                                    type="tel"
                                    placeholder="Phone" 
                                    id="phone" 
                                    autoComplete="off"
                                    onClick={() => handlerClick(phone.phone,3)}
                                    onChange={(Event) => handlerChangePhone(Event)}
                                    value={phone.phone}/>
                                    <p className="mensaje">{msjPhone}</p>

                                    <textarea className="entrada" 
                                    type="text"
                                    placeholder="Message" 
                                    id="message"
                                   // onChange={(Event) => handlerChangeMessage(Event)}
                                   />
            
                                </form>

                                <Boton text="Send" handlerClick={handlerClickBoton}
                                 id="boton2"
                                 />
                                  <p className="mensaje ok">{msjBoton}</p>
                                  
                            
                            </div>


                        </div>

                    <div className="background"/>
                
                </div>
        
              
                <div className="img-contact">
                    <img className="img-5" src={ImgContacto} alt="imagen contacto"/>
                </div>
               

            </div>

        </Fragment>

    )
}

export default Formulario;