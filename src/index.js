import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/main.scss'
import $ from 'jquery'
import * as serviceWorker from './serviceWorker';

require('bootstrap')

const mapboxLink = document.createElement('link')
mapboxLink.setAttribute('href', 'https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css')
mapboxLink.setAttribute('rel', 'stylesheet')
$('head').append(mapboxLink)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
