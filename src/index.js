import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './assets/css/materialize.min.css';
import './assets/css/style.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
