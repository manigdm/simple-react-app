import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './app.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('container'));
registerServiceWorker();
