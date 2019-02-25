import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Header from './components/Header';
import  { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Header />
    <App />
  </Provider>,
  document.getElementById('root')
)
