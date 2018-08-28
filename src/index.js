import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
//REDUX
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { recipeApp } from './redux/reducers/index.js';
//APPfiles
import App from './App.js';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
