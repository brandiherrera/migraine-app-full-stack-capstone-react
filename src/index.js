import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import DATA from './DATA';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <App data={DATA}/>
    </BrowserRouter>,
    document.getElementById('root')
);
