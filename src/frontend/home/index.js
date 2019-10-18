import React from 'react';
import Header from './../theme/header';
import Body from './../theme/body';
import Footer from './../theme/footer';
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

                <Footer>
                    
                </Footer>
            </div>
        </div>
    )
}

export default Index;