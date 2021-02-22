import React, { Component } from "react";
import { Button } from '@material-ui/core';
import history from './../history';
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Headblockhead.com</h1>
          <h5>Welcome to my Website :)</h5>
          <br></br>
          <form>
            <Button variant="contained" color="secondary" onClick={() => history.push('/Mc')}>Visit my minecraft server</Button>
            <br></br>
            <br></br>
            <Button variant="contained" color="primary" onClick={() => history.push('/Games')}>Browse my games</Button>
          </form>
        </div>
      </div>
    );
  }
}
