import React from "react";
import '../stylesheets/FormLogin.css';
import { useState, useRef } from "react";
import Axios from "axios";

function FormLogin(){
    const [userLogin, setUserLogin] = useState("");
    const [passwordLogin, setPasswordLogin]= useState("");
    const formRef = useRef(null);

   
    

    const closeForm = () => {
        formRef.current.reset();
      };
    
    const Login= (e) =>{
        console.log("Entra");
        Axios.get("http://localhost:3001/login").then((response)=>{
            const users = response.data;

            const usersFound = users.find((user)=>{
                return(
                    user.user_name === userLogin && user.user_password === passwordLogin
                );
            });
            if(!userLogin.trim() && !passwordLogin.trim()){
                //Funcion alerta de que faltan datos
            }else if(usersFound){
                alert("Usuario correcto");
            }else{
                alert("Datos incorrectos");
            }
        }).catch((error)=>{
            console.log("Error en la solicitud get", error);
        })
    }

    

    return(
        <div className="container-form-login">

            <form className="form-login" ref={formRef} method="GET" onSubmit={Login} action="http://localhost:3301/login">
                <div className="container-legend-username">
                <label for="username" className="username">Username</label>
                </div>
                <div className="container-input-user">
                    <div className="container-png-user">
                    <svg class="svg-icon-user"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M843.282963 870.115556c-8.438519-140.515556-104.296296-257.422222-233.908148-297.14963C687.881481 536.272593 742.4 456.533333 742.4 364.088889c0-127.241481-103.158519-230.4-230.4-230.4S281.6 236.847407 281.6 364.088889c0 92.444444 54.518519 172.183704 133.12 208.877037-129.611852 39.727407-225.46963 156.634074-233.908148 297.14963-0.663704 10.903704 7.964444 20.195556 18.962963 20.195556l0 0c9.955556 0 18.299259-7.774815 18.962963-17.73037C227.745185 718.506667 355.65037 596.385185 512 596.385185s284.254815 122.121481 293.357037 276.195556c0.568889 9.955556 8.912593 17.73037 18.962963 17.73037C835.318519 890.311111 843.946667 881.019259 843.282963 870.115556zM319.525926 364.088889c0-106.287407 86.186667-192.474074 192.474074-192.474074s192.474074 86.186667 192.474074 192.474074c0 106.287407-86.186667 192.474074-192.474074 192.474074S319.525926 470.376296 319.525926 364.088889z"  /></svg>
                    </div>
                    <input type="text" className="input-username" placeholder="Username"
                    onChange={(event) =>{
                        setUserLogin(event.target.value);
                    }} 
                    />
                </div>
                <div className="container-legend-password">
                <label for="password" className="password">Password</label>
                </div>
                <div className="container-input-pass">
                    <div className="container-png-pass">
                    <svg class="svg-icon-pass" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M695.466667 407.134815l-12.420741 0c-0.474074 0-0.853333-0.379259-0.853333-0.853333l0-62.672593c0-44.942222-17.161481-87.419259-48.355556-119.466667-25.031111-25.78963-56.983704-42.477037-92.16-48.45037-104.96-18.10963-200.533333 64-200.533333 170.477037l0 60.112593c0 0.474074-0.379259 0.853333-0.853333 0.853333l-10.998519 0c-48.071111 0-87.04 38.968889-87.04 87.04l0 269.558519c0 48.071111 38.968889 87.04 87.04 87.04l365.226667 0c48.071111 0 87.04-38.968889 87.04-87.04L781.558519 493.321481C781.653333 445.724444 743.063704 407.134815 695.466667 407.134815zM382.008889 343.608889c0-78.032593 51.674074-129.611852 129.611852-129.611852 38.21037 0 67.034074 11.946667 93.013333 38.684444 25.41037 26.168889 36.598519 54.234074 36.598519 90.927407l0 62.672593c0 0.474074-0.379259 0.853333-0.853333 0.853333L382.862222 407.134815c-0.474074 0-0.853333-0.379259-0.853333-0.853333L382.008889 343.608889zM740.882963 764.586667c0 30.340741-15.075556 45.416296-45.416296 45.416296L329.386667 810.002963c-25.505185 0-46.26963-20.66963-46.26963-46.26963L283.117037 500.527407c0-29.013333 23.514074-52.527407 52.527407-52.527407l358.874074 0c25.505185 0 46.26963 20.66963 46.26963 46.26963L740.788148 764.586667z"  /><path d="M510.388148 561.682963c-14.506667 0-18.962963 10.808889-18.962963 19.437037l0 83.057778c0 8.628148 8.533333 15.644444 18.962963 15.644444 10.42963 0 18.962963-7.016296 18.962963-15.644444l0-83.057778C529.351111 572.491852 522.714074 561.682963 510.388148 561.682963z"  /></svg>
                    </div>
                    <input type="password" className="input-password" placeholder="Password" onChange={(event)=>{
                        setPasswordLogin(event.target.value);
                    }} />
                </div>

                <div className="container-button">
                    <div className="button-submit" onClick={()=>{
                        Login();
                        //falta funcion para que salga alerta
                    }}>Login</div>
               <div className="container-missing-pass">
                <span className="missing-text">¿Has olvidado tu contraseña?</span>
               </div>
                </div>
                

            </form>


        </div>

    );
}
export default FormLogin;