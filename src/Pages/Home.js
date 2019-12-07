import React from "react";
import CardButton from "../Components/CardButton";

function Home() {
  return (
    <React.Fragment>
      <div className="Page-header">
        <div className=" d-flex justify-content-center">
          <div className="m-md-3">
            <CardButton
              Nombre="Derivada"
              Descripcion="Concepto de Derivada"
              Boton="Ingresar"
              Ruta="Derivada"
            />
          </div>
          <div className="m-md-3">
            <CardButton
              Nombre="Límite"
              Descripcion="Concepto de Límite"
              Boton="Ingresar"
              Ruta="Limite"
            />
          </div>
          <div className="m-md-3">
            <CardButton
              Nombre="Integral"
              Descripcion="Concepto de Integral"
              Boton="Ingresar"
              Ruta="Integral"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Home;
