import React from 'react';
import './header.css';

const Header = (props) => {
    return (
        <div className="Contenedor">
            <nav>
                <ul>
                    <li className="Opciones">
                        Inicio
                    </li>

                    <li>
                        Peliculas
                    </li>

                    <li>
                        Series
                    </li>

                    <li>
                        Calendario
                    </li>

                    <li>
                        Ayuda
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header; 