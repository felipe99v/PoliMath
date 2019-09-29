import React, { Component } from 'react'

//Components
//import {ItemNavbar} from "./item-navbar"
//import {Login} from './btn-login'

export class CardButton extends Component {
    render() {
        return (
            <div className="Cards">
                <div class="card text-white text-center bg-dark mb-3" style={{ maxWidth: "12rem" }}>
                    <div class="card-header ">Limites</div>
                    <div class="card-body">
                        <h5 class="card-title">cursito limite</h5>
                        <button class="card-text btn btn-dark ">Aqui boton</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default CardButton;