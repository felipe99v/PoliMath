import React, { Component } from 'react'

//Components
//import {ItemNavbar} from "./item-navbar"
//import {Login} from './btn-login'
import developer from "../Images/developer.png";

export class We extends Component {
    render() {
        return (
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div class="col-md-4">
                    <img src={developer} alt="Imagendeveloper" class="img-responsive rounded mx-auto d-block" /></div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Santiago Medina</h5>
                                <p className="card-text">Estudiante de tecnologia en sistematización de datos.</p>
                                <p className="card-text"><small className="text-muted">5 semestre</small></p>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Felipe Varela</h5>
                                <p className="card-text">Estudiante de tecnologia en sistematización de datos.</p>
                                <p className="card-text"><small className="text-muted">5 semestre</small></p>
                            </div>
                        </div>
                    </div>
                </div>

                )
            }
        }
export default We;