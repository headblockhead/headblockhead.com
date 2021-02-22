import React, { Component, Button } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Mc from "./Mc/Mc";
import Games from "./Games/Games";
import Products from "./Product/Products";
import Home from "./Home/Home";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Mc" component={Mc} />
                    <Route path="/Games" component={Games} />
                    <Route path="/Products" component={Products} />
                </Switch>
            </Router>
        )
    }
}
