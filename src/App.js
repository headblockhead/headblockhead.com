import React from 'react';
import './App.css';
import Navigation from './components/Navbar';
import Mc from "./Mc/Mc";
import Games from "./Games/Games";
import Products from "./Product/Products";
import Home from "./Home/Home";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';

const App = () => (
  <div className="App">
    <Router history={history}>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Mc">
          <Mc />
        </Route>
        <Route path="/Games" component={Games} />
        <Route path="/Products" component={Products} />
      </Switch>
    </Router>
  </div>
)

export default App;
