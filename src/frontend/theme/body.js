import React from 'react';
import imagen1 from './../../assets/Annabelle.jpg'; 
import imagen2 from './../../assets/IT.jpg';
import imagen3 from './../../assets/John.jpg';
import imagen4 from './../../assets/Spiderman.jpg';
import imagen5 from './../../assets/ToyStory.jpg';
import imagen6 from './../../assets/Chucky.jpg';
import imagen7 from './../../assets/Hierba.jpg';
import imagen8 from './../../assets/Infierno.jpg';
import imagen9 from './../../assets/Rey leon.jpg';
import imagen10 from './../../assets/Mujer maravilla.jpg';
import imagen11 from './../../assets/La Muerte.jpg';
import imagen12 from './../../assets/Ocultos.jpg';
import imagen13 from './../../assets/El Camino.jpg';

import Series1 from './../../assets/SWAT.jpg';
import Series2 from './../../assets/the flash.jpeg';
import Series3 from './../../assets/american.jpeg';
import Series4 from './../../assets/The good doctor.jpg';
import Series5 from './../../assets/The Resident.jpg';
import Series6 from './../../assets/Doom.jpg';



import './body.css';

const Body = (props) => {
    return (
        <div className="Imagenes">
            <p>
            Bienvenidos a Hackstore.Net aquí encontraras Series,
            Películas y Animes para descargar y ver online completamente gratis 
            en los mejores servidores como MEGA, 4Shared, Google Drive, 1Fichier y Más! 
            Siempre con las mejores calidades posibles como DVDRip, Blu-Ray RIP 720p - 1080p, 
            trayendo los últimos estrenos 2019 y los grandes clásicos.
            </p>

            <img src={imagen1}/>
            <img src={imagen2}/>
            <img src={imagen3}/>
            <img src={imagen4}/>
            <img src={imagen5}/>
            <img src={imagen6}/>
            <img src={imagen7}/>
            <img src={imagen8}/>
            <img src={imagen9}/>
            <img src={imagen10}/>
            <img src={imagen11}/>
            <img src={imagen12}/>
            <img src={imagen13}/>

            <h3 className="Series">
            Series
            </h3>

            <img src={Series1}/>
            <img src={Series2}/>
            <img src={Series3}/>
            <img src={Series4}/>
            <img src={Series5}/>
            <img src={Series6}/>
    
        </div>

    )
}

export default Body;