import React from 'react';
import ReactDOM from 'react-dom/client';

import 'mapbox-gl/dist/mapbox-gl.css';
import './assets/styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);