import React from "react";
import "../stylesheets/FormLogin.css";
import { useState, useRef } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FormLogin() {

const navigate = useNavigate();
  //Hooks
  const [userLogin, setUserLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  //Referencias a los elementos del DOM
  const inputUsername = useRef(null);
  const inputPass = useRef(null);
  const formRef = useRef(null);

  const closeForm = () => {
    formRef.current.reset();
  };

  //Funcion que implementa los bordes rojos que se remarca cuando falta un dato
  const applyBlinkingAndRemove = (elementRef) => {
    elementRef.current.classList.add("blinking");
    setTimeout(() => {
      elementRef.current.classList.remove("blinking");
    }, 2000);
  };

  //Verificacion de campos antes del Login
  const Verification = () => {
    if (!userLogin.trim() && !passwordLogin.trim()) {
      applyBlinkingAndRemove(inputUsername);
      applyBlinkingAndRemove(inputPass);
    } else if (!userLogin.trim()) {
      applyBlinkingAndRemove(inputUsername);
    } else if (!passwordLogin.trim()) {
      applyBlinkingAndRemove(inputPass);
    } else if (userLogin.trim() && passwordLogin.trim()) {
      Login();
    }
  };

  //Llamada a la base de datos 'GET'
  const Login = (e) => {
    Axios.get("http://localhost:3001/login")
      .then((response) => {
        const users = response.data;

        const usersFound = users.find((user) => {
          return (
            user.user_name === userLogin && user.user_password === passwordLogin
          );
        });
        if (usersFound) {
            navigate("/home");
        } else {
          alert("Datos incorrectos");
        }
      })
      .catch((error) => {
        console.log("Error en la solicitud get", error);
      });
    
  };


  // Contenedor principal del Login
  return (
    <div className="container-form-login">
      <form
        className="form-login"
        ref={formRef}
        method="GET"
        onSubmit={Verification}
        action="http://localhost:3301/login"
      >
        <div className="container-legend-username">
          <label className="username">Username</label>
        </div>
        <div className="container-input-user" ref={inputUsername}>
          <div className="container-png-user">
            <svg
              className="svg-icon-user"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 101 101"
              id="user"
            >
              <path d="M50.4 54.5c10.1 0 18.2-8.2 18.2-18.2S60.5 18 50.4 18s-18.2 8.2-18.2 18.2 8.1 18.3 18.2 18.3zm0-31.7c7.4 0 13.4 6 13.4 13.4s-6 13.4-13.4 13.4S37 43.7 37 36.3s6-13.5 13.4-13.5zM18.8 83h63.4c1.3 0 2.4-1.1 2.4-2.4 0-12.6-10.3-22.9-22.9-22.9H39.3c-12.6 0-22.9 10.3-22.9 22.9 0 1.3 1.1 2.4 2.4 2.4zm20.5-20.5h22.4c9.2 0 16.7 6.8 17.9 15.7H21.4c1.2-8.9 8.7-15.7 17.9-15.7z"></path>
            </svg>
          </div>
          <input
            type="text"
            className="input-username"
            id="input-username"
            placeholder="Username"
            onChange={(event) => {
              setUserLogin(event.target.value);
            }}
          />
        </div>
        <div className="container-legend-password">
          <label className="password">Password</label>
        </div>
        <div className="container-input-pass" ref={inputPass}>
          <div className="container-png-pass">
            <svg
              className="svg-icon-pass"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 29 29"
            >
              <path d="M20 12.5H9a1 1 0 0 1-1-1V8c0-3.584 2.916-6.5 6.5-6.5S21 4.416 21 8v3.5a1 1 0 0 1-1 1zm-10-2h9V8c0-2.481-2.019-4.5-4.5-4.5S10 5.519 10 8v2.5z"></path>
              <path d="M23 27.5H6c-1.654 0-3-1.346-3-3v-11c0-1.654 1.346-3 3-3h17c1.654 0 3 1.346 3 3v11c0 1.654-1.346 3-3 3zm-17-15a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1H6z"></path>
            </svg>
          </div>
          <input
            type="password"
            className="input-password"
            placeholder="Password"
            onChange={(event) => {
              setPasswordLogin(event.target.value);
            }}
          />
        </div>

        <div className="container-button">
          <div
            className="button-submit"
            onClick={() => {
              Verification();
              //falta funcion para que salga alerta
            }}
          >
            Login
          </div>
          <div className="container-missing-pass">
            <span className="missing-text">¿Has olvidado tu contraseña?</span>
          </div>
        </div>
      </form>
    </div>
  );
}
