import React from "react";

//Imagenes
import Imagen404 from "../Images/404.png";

class NotFound extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="Page-header page-wrap d-flex flex-row align-items-center">
          <div class="container m-md-3 row justify-content-center">
            <div class="col-md-12 text-center">
              <span class="display-1 d-block">You Shall Not Pass!</span>
              <img src={Imagen404} alt="Imagen404" class="img-responsive rounded mx-auto d-block" />
              <span class="display-2 d-block">404</span>
              <p class="mb-4 lead">La página que buscas no fue encontrada.
              Retorna a la página principal.</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NotFound;
