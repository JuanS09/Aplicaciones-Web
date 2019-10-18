import React from 'react';
import Header from './../theme/header';
import Body from './../theme/body';
import './index.css';

const Index = (props) => {
    return (
        <div className="cuerpo">
            <div className="Encabezado">
                <h1>
                    Hackstore.Net
                </h1>
                </div>
                <div>
                <Header>

                </Header>
                <Body>

                </Body>
            </div>
        </div>
    )
}

export default Index;