import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CardButton extends Component {
  render() {
    return (
      <div className="Cards">
        <div
          className="card text-white text-center bg-dark mb-3"
          style={{ maxWidth: "12rem" }}
        >
          <div className="card-header ">{this.props.Nombre}</div>
          <div className="card-body">
            <h5 className="card-title">{this.props.Descripcion}</h5>
            <Link to={{pathname:`/${this.props.Ruta}`}}>
              <button className="card-text btn btn-dark ">
                {this.props.Boton}
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default CardButton;
