import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';


import App from './containers/app';
import reducers from './reducers';
import cardApps from './containers/card_apps';
import Deployment from './containers/deployment';
import Signout from './containers/signout';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={cardApps} />
        <Route path="/:name" component={Deployment} />
        <Route path="signout" component={Signout} />
      </Route>        
    </Router>
  </Provider>
  , document.querySelector('.container'));
