import React from 'react'
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
