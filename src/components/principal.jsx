import React, { useState } from "react";
import '../stylesheets/PrincipalStyle.css';

function Principal() {
    // Estado para controlar la visibilidad del perfil
    const [isProfileVisible, setProfileVisible] = useState(false);

    // Función para cambiar la visibilidad del perfil
    const toggleProfile = () => {
        setProfileVisible(!isProfileVisible);
    };

    return (
        <div className="principal-web">
            <nav>
                <div id="logo">
                    <a href="#"><img src="https://p.kindpng.com/picc/s/132-1323877_tinder-logo-png-transparent-png.png" alt="Logo" /></a>
                </div>
                <div id="profile">
                    <ul>
                        <li>
                            <a href="#"><img src="https://static-00.iconduck.com/assets.00/bust-in-silhouette-emoji-1963x2048-3pisyxs1.png" alt="Profile" onClick={toggleProfile} /></a>
                        </li>
                        <li><a href="#"><img src="https://img.freepik.com/free-icon/chat_318-886151.jpg?w=360" alt="Messages" /></a></li>
                    </ul>
                </div>
            </nav>
            {isProfileVisible && (
                <div id="elements-profile">
                    <div id="profile-header">
                        <img src="https://img.freepik.com/foto-gratis/hombre-morena-sobre-fondo-blanco-aislado_1368-4404.jpg" alt="YourPhoto" />
                        <h2>Your Name</h2>
                    </div>
                    <div id="buttons">
                        <button>Edit your profile</button>
                        <button>Close your session</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Principal;
