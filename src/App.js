import React from 'react';
import { Navbar } from './Components/navbar'
import { Footer } from './Components/footer'
import { Cardbotton } from './Components/cardbotton'


//Estilos CSS
import './App.css'

//Librerias
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'
//import 'popper.js/dist/popper.min.js'

function App() {
  return (
    <div className="App">

      <div className="Navbar">
        <Navbar />
      </div>

      <div>
        <div class="row">
          <div class="col-sm-4">
          <Cardbotton />
          </div>
          <div class="col-sm-4">
          <Cardbotton />
          </div>
          <div class="col-sm-4">
          <Cardbotton />
          </div>
        </div>
      </div>


      <div className="Footer">
        <Footer />
      </div>

    </div>
  );
}

export default App;
