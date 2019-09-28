import React, { Component } from 'react'

//Components
//import {ItemNavbar} from "./item-navbar"
//import {Login} from './btn-login'

export class Navbar extends Component {
    render() {
        return (

            <div className="Navbar" >
                <nav className="navbar navbar-light" style={{ backgroundColor: "#74EF02" }}>

                    <div className="container">

                        <div className="row">
                            <a className="navbar-brand" href="#">Polimatch</a>
                            <div className="col-sm">
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm">
                                <a className="navbar-brand" href="#">Nosotros</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}