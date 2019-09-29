import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';

//Estilos
import './Styles/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
