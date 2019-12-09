import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import RiemannIntegrability from "../Components/Graficas/RiemannIntegrability";

class Limite extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Page-header">
          <h1>Guia para entender el concepto de límite</h1>
          <Container fluid="true">
            <Row noGutters="true">
              <Col>
                <div id="jxgbox" className="jxgbox">
                  <RiemannIntegrability />
                </div>
              </Col>
              <Col>
                <div className="overflow">
                  <blockquote className="blockquote mb-0">
  <p class="mb-0">
                    Un límite viene a ser una barrera a la que nos podemos aproximar tanto como queramos pero que nunca podemos sobrepasar. El límite es un concepto que describe la tendencia de una sucesión o una función, a medida que los parámetros de esa sucesión o función se acercan a determinado valor. El límite de una función es un concepto fundamental del cálculo diferencial matemático
                    </p>
                  </blockquote>
                </div>
              </Col>
            </Row>
          </Container>
          <div style={{ margin: "8px",display: 'flex', justifyContent: 'center'}}>
          <Link to="/QuizLimite">
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

export default Limite;
