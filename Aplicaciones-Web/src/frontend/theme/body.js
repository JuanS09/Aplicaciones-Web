import React from 'react';
import imagen1 from './../../assets/Annabelle.jpg'; 
import imagen2 from './../../assets/IT.jpg';
import imagen3 from './../../assets/John.jpg';
import imagen4 from './../../assets/Spiderman.jpg';
import imagen5 from './../../assets/ToyStory.jpg';
import './body.css';

const Body = (props) => {
    return (
        <div className="Imagenes">
            <img src={imagen1}/>
            <img src={imagen2}/>
            <p>
                Descripcion
            </p>
            <img src={imagen3}/>
            <img src={imagen4}/>
            <img src={imagen5}/>
        </div>
    )
}

export default Body;