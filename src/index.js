import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SMSForm from './components/SMSForm';
// import Header from './components/Header';
import  { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <BaseLayout>
    {/* <App /> */}
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/SMSForm" component={SMSForm}/>
    </Switch>
    </BaseLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
