import React from 'react';

//Estilos
import '../Styles/App.css';

//Componentes
import { NavBar } from './NavBar'
import { Footer } from './Footer'

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