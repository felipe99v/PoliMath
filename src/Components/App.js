import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Componentes
import Layout from "./Layout";

//Paginas
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Nosotros from "../Pages/Nosotros";
import Integral from "../Pages/Integral";
import Limite from "../Pages/Derivada";
import Derivada from "../Pages/Limite";

//Librerias
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Nosotros" component={Nosotros} />
          <Route exact path="/Integral" component={Integral} />
          <Route exact path="/Limite" component={Limite} />
          <Route exact path="/Derivada" component={Derivada} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
