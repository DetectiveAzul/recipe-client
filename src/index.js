import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
//REDUX
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import recipeApp from './_redux/reducers/index.js';
//APPfiles
import App from './App.js';

const store = createStore(recipeApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root'));
registerServiceWorker();
