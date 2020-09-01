import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';
import App from './App';
import store from "./store"
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
<Provider store={store}>
   <BrowserRouter>
   <Route component={App} />
   </BrowserRouter>
</Provider>,
document.getElementById('root')
);
