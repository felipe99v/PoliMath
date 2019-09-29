import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class NavBar extends Component {
    render() {
        return (
            <div className="Navbar" style={{ backgroundColor: "rgb(0,146,64)" }}>
                <nav className="navbar navbar-dark">
                    <div className="container">
                        <div className="row">
                            <Link to="/" className="navbar-brand">PoliMath</Link>
                            <div className="col-sm">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <button className="navbar-brand btn btn-outline-success">Nosotros</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}