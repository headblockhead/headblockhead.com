import { makeStyles } from '@material-ui/core';
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Contact extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>Welcome to the archive of my games!</h2>
                    <h5>This is a collection of every game I ever made, starting with scratch projects made when I was just 6 years old and ending with advanced unity projects. Be warned, not all of the games shown here will work fully! If any of the projects display a sad face in the top right, just reload, this is a problem with scratch's iframe tool, not my website.</h5>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h2>Scratch Cat Calculator</h2>
                    <p>This is the first game I ever made. In this "game" you type in a number and then another number, select a symbol and wait for 10 seconds whilst the cat "thinks". They will then tell you the answer. I was very proud of this creation and even made a youtube video on it, but that was sadly lost due to a careless reformat of my old laptop's hard drive.</p>
                    <a> Scratch link: </a><a href="https://scratch.mit.edu/projects/129350991">https://scratch.mit.edu/projects/129350991</a>
                    <br></br><br></br>
                    <a> SB3 file: </a><a href="files/" download="catcalc.sb3">catcalc.sb3</a>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <h2>Ball Bounce</h2>
                    <p>Despite the name, this game is about catching balls, not bouncing them. The objective of the game is to catch the rainbow balls whilst avoiding the red flashing ones. Move with the arrow keys. This one did not get a video made about it, but was quite fun to make.</p>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <h2>Balloon Pop</h2>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <h2>Crossy Road</h2>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <h2>Question cat</h2>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <h2>Bubble Pop</h2>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <h2>Scratch Iphone 1.0</h2>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <h2>Scratch Iphone 2.0</h2>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <h2>Scratch Iphone 3.0</h2>
                </div>
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <iframe title="catcalc" src="https://scratch.mit.edu/projects/129350991/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowFullScreen></iframe>
                    <br></br>
                    <br></br>
                    <iframe title="ballbounce"src="https://scratch.mit.edu/projects/129351237/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowFullScreen></iframe>
                    <br></br>
                    <br></br>
                    <iframe title="balloonpop"src="https://scratch.mit.edu/projects/129351373/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowFullScreen></iframe>
                    <br></br>
                    <br></br>
                    <iframe title="crossyroad" src="https://scratch.mit.edu/projects/129351921/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowFullScreen></iframe>
                    <br></br>
                    <br></br>
                    <iframe title="questioncat" src="https://scratch.mit.edu/projects/137951368/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowFullScreen></iframe>
                    <br></br>
                    <br></br>
                    <iframe title="bubblepop" src="https://scratch.mit.edu/projects/129351718/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
                    <br></br>
                    <br></br>
                    <iframe src="https://scratch.mit.edu/projects/129299025/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
                    <br></br>
                    <br></br>
                    <iframe src="https://scratch.mit.edu/projects/253165316/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
                    <br></br>
                    <br></br>
                    <iframe src="https://scratch.mit.edu/projects/269089599/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
                    <br></br>
                    <br></br>
                </div>
            </div>
        );
    }
}

export default Contact;
