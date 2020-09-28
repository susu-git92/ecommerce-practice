import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Product from './Product';
import reducer, {initialState} from './reducer';
import { StateProvider } from './StateProvider';
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    <Router>
      <StateProvider initialState={initialState} reducer={reducer}>
        <div className="App">
          <Switch>
            <Route path="/checkout">
              <Header/>
              <Checkout />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Header/>
              <Product />
            </Route>
          </Switch>
        </div>
    </StateProvider>
    </Router>
  );
}

export default App;
