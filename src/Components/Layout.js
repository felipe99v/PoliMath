import React from 'react';

//Estilos
import '../Styles/App.css';

//Componentes
import { NavBar } from './navbar'
import { Footer } from './footer'

const Layout = props => {
    return (
        <React.Fragment>
            <NavBar />
            {props.children}
            <Footer />
        </React.Fragment>
    )
}
export default Layout;