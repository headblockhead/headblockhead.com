import React, { Component } from "react";
import { Button } from '@material-ui/core';
import history from './../history';
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Headblockhead</h1>
          <h5>A collection of all things to do with me.</h5>
          <br></br>
          <form>
            <Button variant="contained" color="secondary" onClick={() => history.push('/Mc')}>My minecraft server</Button>
            <br></br>
            <hr></hr>
            <Button variant="contained" color="primary" onClick={() => history.push('/Games')}>My games</Button>
          </form>
        </div>
      </div>
    );
  }
}
