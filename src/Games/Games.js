import React, { Component } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

class Games extends Component {
    render() {
        return (
            <>
                <BrowserView>
                    <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                        <div><h2>Welcome to the archive of my games!</h2>
                            <h5>This is a collection of every game I ever made, starting with scratch projects made when I was just 6 years old and ending with advanced unity projects. Be warned, not all of the games shown here will work fully! If any of the projects display a sad face in the top right, just reload, this is a problem with scratch's iframe tool, not my website.</h5>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h2>Scratch Cat Calculator</h2>
                            <p>This is the first game I ever made. In this "game" you type in a number and then another number, select a symbol and wait for 10 seconds whilst the cat "thinks". They will then tell you the answer. I was very proud of this creation and even made a youtube video on it, but that was sadly lost due to a careless reformat of my old laptop's hard drive.</p>
                            <a> Scratch link: </a><a href="https://scratch.mit.edu/projects/129350991">https://scratch.mit.edu/projects/129350991</a>
                            <br></br>
                            <a> SB3 file: </a><a href="https://headblockhead.com/files/scratch/catcalc.sb3">catcalc.sb3</a>
                            <br></br><br></br><br></br><br></br>
                            <h2>Ball Bounce</h2>
                            <p>Despite the name, this game is about catching balls, not bouncing them. The objective of the game is to catch the rainbow balls whilst avoiding the red flashing ones. Move your charcter with the arrow keys. This one did not get a video made about it, but was quite fun to make.</p>
                            <a> Scratch link: </a><a href="https://scratch.mit.edu/projects/129351237">https://scratch.mit.edu/projects/129351237</a>
                            <br></br>
                            <a> SB3 file: </a><a href="https://headblockhead.com/files/scratch/ballbounce.sb3">ballbounce.sb3</a>
                            <br></br><br></br><br></br>
                            <h2>Balloon Pop</h2>
                            <p>Pop balloons by clicking on them before the time at the top runs out. Don't pop the purple balloons however as they will take away from your score!</p>
                            <a> Scratch link: </a><a href="https://scratch.mit.edu/projects/129351373">https://scratch.mit.edu/projects/129351373</a>
                            <br></br>
                            <a> SB3 file: </a><a href="https://headblockhead.com/files/scratch/balloonpop.sb3">balloonpop.sb3</a>
                            <br></br><br></br><br></br>
                            <h2>Crossy Road</h2>
                            <p>Click infront of the chicken to move them forward but don't let the cars touch you, they will kill you instanly!</p>
                            <a> Scratch link: </a><a href="https://scratch.mit.edu/projects/129351921">https://scratch.mit.edu/projects/129351373</a>
                            <br></br>
                            <a> SB3 file: </a><a href="https://headblockhead.com/files/scratch/crossyroad.sb3">crossyroad.sb3</a>
                            <br></br><br></br><br></br><br></br>
                            <h2>Question cat</h2>
                            <p>The all knowing cat will ask you 3 maths questions to check if you are worthy of existing. What about 4 questions? 5? 6? No, ∞ questions! Try this, human!</p>
                            <a> Scratch link: </a><a href="https://scratch.mit.edu/projects/137951368">https://scratch.mit.edu/projects/129351373</a>
                            <br></br>
                            <a> SB3 file: </a><a href="https://headblockhead.com/files/scratch/questioncat.sb3">questioncat.sb3</a>
                            <br></br><br></br><br></br>
                            <h2>Bubble Pop</h2>
                            <p>This game is not finished (yet) but it already has most of the gameplay. The idea was that you would move the red ball in the center and get pooints for popping the bubbles by having them bump into you.</p>
                            <a> Scratch link: </a><a href="https://scratch.mit.edu/projects/129351718">https://scratch.mit.edu/projects/129351373</a>
                            <br></br>
                            <a> SB3 file: </a><a href="https://headblockhead.com/files/scratch/bb.sb3">bb.sb3</a>
                            <br></br><br></br><br></br>
                            <h2>Scratch Iphone 1.0</h2>
                            <p>The original scratch Iphone, shown in a now lost video. Unlock with the code 0000 and have fun!</p>
                            <a> Scratch link: </a><a href="https://scratch.mit.edu/projects/129299025">https://scratch.mit.edu/projects/129351373</a>
                            <br></br>
                            <a> SB3 file: </a><a href="https://headblockhead.com/files/scratch/iphone1.sb3">iphone1.sb3</a>
                            <br></br><br></br><br></br>
                            <h2>Scratch Iphone 2.0</h2>
                            <p>The second scratch Iphone, never shown in video. Unlock with the code 0000 and have fun! This is almost identical to the 3rd scratch iphone, the only difference being that it still has the leftovers from a snake game I was trying to make, before i decided to go with flappy bird, in the code.</p>
                            <a> Scratch link: </a><a href="https://scratch.mit.edu/projects/253165316">https://scratch.mit.edu/projects/129351373</a>
                            <br></br>
                            <a> SB3 file: </a><a href="https://headblockhead.com/files/scratch/iphone2.sb3">iphone2.sb3</a>
                            <br></br><br></br><br></br>
                            <h2>Scratch Iphone 3.0</h2>
                            <p>The third scratch Iphone, never shown in video. Unlock with the code 0000 and have fun! This is almost identical to the 2nd scratch iphone, differences between the two listed above.</p>
                            <a> Scratch link: </a><a href="https://scratch.mit.edu/projects/269089599">https://scratch.mit.edu/projects/129351373</a>
                            <br></br>
                            <a> SB3 file: </a><a href="https://headblockhead.com/files/scratch/ballbounce.sb3">iphone3.sb3</a>
                            <br></br><br></br><br></br>
                            {/* <h2>3D Lazer Tag</h2>
                            <p>This was my first unity game. Designed for mobile, this project was going to be a lazer tag simulation game. Shoot the purple capsule to win.</p>
                            <br></br>
                            <a> HTML 5 Build: </a><a href="./UnityHTML5/3DLAZERTAG">Here</a> */}
                        </div>
                    </div>
                </BrowserView>
                <MobileView>
                    <div style={{ display: 'flex', justifyContent: 'center', padding: 30, textAlign: "center" }}>
                        <div><h2>Welcome to the archive of my games!</h2>
                            <h5>This is a collection of every game I ever made, starting with scratch projects made when I was just 6 years old and ending with advanced unity projects. Be warned, not all of the games shown here will work fully!</h5>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h2>Scratch Cat Calculator</h2>
                            <p>This is the first game I ever made. In this "game" you type in a number and then another number, select a symbol and wait for 10 seconds whilst the cat "thinks". They will then tell you the answer. I was very proud of this creation and even made a youtube video on it, but that was sadly lost due to a careless reformat of my old laptop's hard drive.</p>
                            <a> Scratch link: </a><a href="https://scratch.mit.edu/projects/129350991">https://scratch.mit.edu/projects/129350991</a>
                            <br></br><br></br><br></br>
                            <h2>Ball Bounce</h2>
                            <p>Despite the name, this game is about catching balls, not bouncing them. The objective of the game is to catch the rainbow balls whilst avoiding the red flashing ones. Move your charcter with the arrow keys. This one did not get a video made about it, but was quite fun to make.</p>
                            <a> Scratch link: </a><a href="https://scratch.mit.edu/projects/129351237">https://scratch.mit.edu/projects/129351237</a>
                            <br></br><br></br><br></br>
                            <h2>Balloon Pop</h2>
                            <p>Pop balloons by clicking on them before the time at the top runs out. Don't pop the purple balloons however as they will take away from your score!</p>
                            <a> Scratch link: </a><a href="https://scratch.mit.edu/projects/129351373">https://scratch.mit.edu/projects/129351373</a>
                            <br></br><br></br><br></br>
                            <h2>Crossy Road</h2>
                            <p>Click infront of the chicken to move them forward but don't let the cars touch you, they will kill you instanly!</p>
                            <a> Scratch link: </a><a href="https://scratch.mit.edu/projects/129351921">https://scratch.mit.edu/projects/129351373</a>

                            <br></br><br></br><br></br>
                            <h2>Question cat</h2>
                            <p>The all knowing cat will ask you three maths questions to check if you are worthy of existance. What about 4 questions? 5? 6? No, ∞ questions! Try this, human!</p>
                            <a> Scratch link: </a><a href="https://scratch.mit.edu/projects/137951368">https://scratch.mit.edu/projects/129351373</a>
                            <br></br><br></br><br></br>
                            <h2>Bubble Pop</h2>
                            <p>This game is not finished (yet) but it already has most of the gameplay. The idea was that you would move the red ball in the center and get pooints for popping the bubbles by having them bump into you.</p>
                            <a> Scratch link: </a><a href="https://scratch.mit.edu/projects/129351718">https://scratch.mit.edu/projects/129351373</a>
                            <br></br><br></br><br></br>
                            <h2>Scratch Iphone 1.0</h2>
                            <p>The original scratch Iphone, shown in a now lost video. Unlock with the code 0000 and have fun!</p>
                            <a> Scratch link: </a><a href="https://scratch.mit.edu/projects/129299025">https://scratch.mit.edu/projects/129351373</a>
                            <br></br><br></br><br></br>
                            <h2>Scratch Iphone 2.0</h2>
                            <p>The second scratch Iphone, never shown in video. Unlock with the code 0000 and have fun! This is almost identical to the 3rd scratch iphone, the only difference being that it still has the leftovers from a snake game I was trying to make, before i decided to go with flappy bird, in the code.</p>
                            <a> Scratch link: </a><a href="https://scratch.mit.edu/projects/253165316">https://scratch.mit.edu/projects/129351373</a>
                            <br></br><br></br><br></br>
                            <h2>Scratch Iphone 3.0</h2>
                            <p>The third scratch Iphone, never shown in video. Unlock with the code 0000 and have fun! This is almost identical to the 2nd scratch iphone, differences between the two listed above.</p>
                            <a> Scratch link: </a><a href="https://scratch.mit.edu/projects/269089599">https://scratch.mit.edu/projects/129351373</a>
                        </div>
                    </div>
                </MobileView>
            </>

        );
    }
}

export default Games;
