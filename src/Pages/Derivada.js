import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import FunctionPlotter from "../Components/Graficas/FunctionPlotter";

class Derivada extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Page-header">
          <h1>Guia para entender el concepto de derivada</h1>
          <Container fluid="true">
            <Row noGutters="true">
              <Col>
                <div id="jxgbox" className="jxgbox">
                  <FunctionPlotter />
                </div>
              </Col>
              <Col>
                <div className="overflow">
                  <blockquote className="blockquote mb-0">
                  <p class="mb-5"> Las derivadas tienen que ver con las funciones. Que es una función: es una relación entre unos datos de entrada y unos datos de salida, es decir, una función entre dos conjuntos A y B es una asociación F que a cada elemento de A le asigna elemento de B. </p> 
  <p class="mb-5"> La Derivada es utilizada para calcular respuestas de una función a la que se le están alterando sus valores iniciales. La derivada de una función está representada gráficamente como una línea recta superpuesta sobre cualquier curva (función), el valor de esta pendiente respecto al eje sobre el cual está siendo estudiada la función recibe el nombre de Derivada. Esta línea, está colocada sobre el punto más extremo (superior o inferior) de la curva, por lo que a su vez está determinando un límite al que la función llega, en relación al incremento que consiga la variable estudiada por las alteraciones que reciba.</p> 
  <p class="mb-5"> Formalmente, cuando calculamos la derivada de una función lo que estamos calculando es el valor de un límite que mide la razón a la que cambia dicha función con respecto a su variable, respecto a la que derivamos.  Las derivadas se usan para el cálculo de velocidades, aceleraciones, optimizar funciones, y una infinidad más de utilidades.</p> 
  <p class="mb-5"> En la Física, la derivada se puede entender como la velocidad instantánea. Se puede considerar la derivada como la razón de variación de una masa poblacional respecto de la variación del tiempo.</p>
                  </blockquote>
                </div>
              </Col>
            </Row>
          </Container>
          <div style={{ margin: "8px",display: 'flex', justifyContent: 'center'}}>
          <Link to="/QuizDerivada">
            <Button
              variant="success"
            >
              Quiz
            </Button>
          </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Derivada;
