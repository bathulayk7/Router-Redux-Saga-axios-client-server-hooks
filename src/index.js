import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';
import App from './App';
import store from "./store"
import { Provider } from 'react-redux';
import { Router, Route, BrowserRouter } from 'react-router-dom';
import history from './history';

// console.log(store.getState())
ReactDOM.render(
<Provider store={store}>
   <Router history={history}> {/* <BrowserRouter> */}
   <Route component={App} />
   </Router>
</Provider>,
document.getElementById('root')
);
