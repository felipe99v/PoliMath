import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import RiemannIntegrability from "../Components/Graficas/RiemannIntegrability";

class Integral extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Page-header">
          <h1>Guia para entender el concepto de integral</h1>
          <Container fluid="true">
            <Row noGutters="true">
              <Col>
                <div id="jxgbox" className="jxgbox">
                  <RiemannIntegrability />
                </div>
              </Col>
              <Col>
                <div className="overflow">
                <blockquote class="blockquote">
  <p class="mb-5">La integración surgió por la necesidad de calcular áreas de figuras irregulares ya que el área por ejemplo de un cuadrado se puede obtener mediante la utilización de fórmulas matemáticas simples</p> 
  <p class="mb-5">pero ¿cómo calculo el área de la figura que vemos a la izquierda? La idea que surgió fue dividir un problema complejo en problemas más sencillos así surgió el método griego llamado “agotamiento” que consiste en transformar una figura irregular en figuras con forma regulares que tuvieran una forma sencilla de obtener su área.</p> 
  <p class="mb-5">Ahora para obtener el área de la figura del lado izquierdo debemos de dividirla en intervalos cada vez más pequeños y realizar rectángulos que suban hasta la gráfica. La suma del área de cada uno de estos rectángulos será el área de la gráfica y así surge el concepto de integral.</p> 
  <p class="mb-5">Recuerda una integral es una suma de las áreas de infinitos rectángulos.</p>
</blockquote>
                </div>
              </Col>
            </Row>
          </Container>
          <div style={{ margin: "8px",display: 'flex', justifyContent: 'center'}}>
          <Link to="/QuizIntegral">
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

export default Integral;
