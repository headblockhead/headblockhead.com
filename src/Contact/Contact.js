import { makeStyles } from '@material-ui/core';
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Contact extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>Welcome to the archive of my games!</h2>
                    <h5>This is a collection of every game I ever made, starting with scratch projects made when I was just 6 years old and ending with advanced unity projects. Be warned, not all of the games shown here will work fully!</h5>
                    <br></br>
                    <br></br>
                    <h2>Scratch Cat Calculator</h2>
                    <p>This is the first game I ever made. In this "game" you type in a number and then another number, select a symbol and wait for 10 seconds whilst the cat "thinks". They will then tell you the answer. I was very proud of this creation and even made a youtube video on it, but that was sadly lost due to a careless reformat of my old laptop's hard drive.</p>
                    <br></br><p> Scratch link: </p><a href="https://scratch.mit.edu/projects/129350991">https://scratch.mit.edu/projects/129350991</a>
                    <p> SB3 file: </p>
                    <br></br><a href="./files/catcalculator.sb3" download="catcalculator.sb3">Download</a>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h2>Ball Bounce</h2>
                    <p>Despite the name, this game is about catching balls, not bouncing them. The objective of the game is to catch the rainbow balls whilst avoiding the red flashing ones. Move with the arrow keys. This one did not get a video made about it, but was quite fun to make.</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h2>Balloon Pop</h2>
                    <p></p>
                </div>
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <iframe src="https://scratch.mit.edu/projects/129350991/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowFullScreen></iframe>
                    <br></br>
                    <br></br>
                    <iframe src="https://scratch.mit.edu/projects/129351237/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowFullScreen></iframe>
                    <br></br>
                    <br></br>
                    <iframe src="https://scratch.mit.edu/projects/129351373/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowFullScreen></iframe>
                    <br></br>
                    <br></br>
                </div>
            </div>
        );
    }
}

export default Contact;
