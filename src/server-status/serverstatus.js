import React, { Component } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import Button from '@material-ui/core/Button'
import { Paper } from '@material-ui/core';
import './serverstatus.css';
import status from 'minecraft-server-status';

const GeticonFromBase64 = ({ data }) => <img alt="The server Icon" src={`data:image/jpeg;base64,${data}`} />
var maxplayers = "???"
var playerson = "???"
var BUTTONTEXT = 'copy'
var pic = 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiAhwGFjopTru5AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTAyLTI4VDA2OjIyOjU4KzAwOjAwl9KGlAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wMi0yOFQwNjoyMjo1OCswMDowMOaPPigAAAe4SURBVHhe7ZtZaBU9FIBz60a17uJW1yquWJUqLlVcqPuC64MWqVbBXUFFfNCiVcQX1wffRH1REXyogqggxRVXXHGHqrR1aRVqq7jPn3M4SefOzL2Tmcnc/vz9Pwg592SSSc4kM0lObsTgsFpMEsW1lv8NQHGtpcbeAb9+/WJfv35lkUiEpaSksDp16lBKYklIDzh+/DjLyclh3bt3xwZDqF+/PmvevDlr1qwZq1u3rtT37duXLV26lBUUFFDukIEeEAZ79+41UlNToXcFCr179zYOHz5MpepH6xCAorKzs/GJOzFixAg2aNAg1qNHD9auXTvWqFEj1H/58oWVlpayZ8+esdu3b2NwYs2aNWz//v30SxNgAB0sW7bM9vTat29v7Nmzx/j8+TNdpc7bt2+Nbdu2GdxItnLz8/PpquAENsCtW7dsFZw5c6bx4cMHuiI4T58+NXjvibpHUlKSUVJSQlf4J5ABli9fHlWpzMxMg7/dKVU/YNS0tLSoe0IPC4JvA/Tq1SuqIlevXqWU8Dl27FjUvSdPnkwp3vFlgKZNm8qbd+vWjbSJJzk5WdajX79+pPWG568AfLcrKipQnjVrFjt16hTKXuAvOHbnzh32/v17nAB16NCBDR8+HOcFXunfvz97+PAhygMGDGD37t1DWRk0gyJ9+vSRFl+8eDFp1aiqqjIWLFgg88cKK1asMH7//k251IB3j8g/e/Zs0qqhbIDVq1fLm8yYMYO0aoCxRF7VsGTJEsqtBkyYRN5Dhw6R1h0lA/BuJQvv0qULadUwj1MIYLzz588b379/pysMo7y83OCTJ9unDsKfP3/oKnfg0yjyVVZWkjY+SgYwV8gL5nxDhgwhbXx+/vxpZGRkROX9+/cvpcaHL65knhYtWpA2Pq4t4tNPWWhhYSFp3TF3yc2bN5NWnX379sn88GRVMedTGQquBhCFDR48mDTu8C+DzJebm0ta7/B5vyxn06ZNpHWncePGMp8bca9YtGiRLOjbt2+kdUeMRf6JI41/0tPTlRsjuHv3rszjNlOMW6ooZMqUKaRxh3+TZb6TJ0+S1j8vXryQ5RUUFJDWnU6dOsl88YiZevDgQVkArMxUga6qcmMviPJWrVpFGnfOnj0r812+fJm0dmLWsmvXrpi5ZcuWpFFjzJgxmA/y6wKW1VAmrDK9IAwwbdo00tiJuSVWVFSE8YYNGzBW5c2bNxjDhocuysrKMOYvN4xV4TNPjM+cOYOxE44GMM/v+YuQJDXGjx+P8fTp0zHWAWygAgMHDsRYFdiHFMBukyPUE6KAaSgkxUhOKOfOnZN1efXqFWnVEXl3795NmmgcW9izZ0/MpDp7C5NRo0bJRvghJSUF88Z6fzgOgefPn2PMJz8Y1xTv3r1jly5dQjk/Px9jr/CHiPH9+/cxthLXL8B7Akk1A3/7k8TYli1bSPIG7EAD4qVuxWYAvhYnKboCiaSkpASdJIJYT0+F1NRUkpyxGQDcVQKvnx0dLFy4EHeIBHw2ibs+fnFrg80A/L1AEot6CmFz8eJFvN/Ro0dJw3DbbO7cufQrHGwGEN4aoLKykqRwWblyJcvKyqJfjI0ePRofREZGBmn8U1VVRZIzNgPUq1ePJIablmGTl5fH+LqDfjF0ixUWFtKv4Li1wWYAMy9fviQpHD59+sS2b9+OMrjI4amD71AnfDWJcceOHTG24miAtLQ0jGEMhklubi5J4Q030Yb09HSMrTgaIDMzE+MrV65gHBanT5/GWCxawgB6GSDaZMXRAGJBA4DrOgzKy8tJYmz+/Pkk6eX69eskMTZx4kSSLMB82ApsRUMShAMHDpBWL+BLFPcoLi4mrV7MLvtYxExp3bo1ZtS5sWHGvGMD29lhIMofO3YsaezE/AqsX78eY5hDhzEMkpKqb/3jxw+S9HHt2jWSqtviCBnCEUiGkJ2dTRp9mL1NpaWlpNUHnz7L8uMRNxXcWCqF+GXjxo3Gjh076Jc+Xr9+LevNV5GkdSZuy8AXIAoKcggh0ahuiQOuV8ybN08W9uTJE9LqoaKiAn2BOjlx4oSs765du0gbG6W+LQqEoAuzJziI+8yKKFPVn6jUIvMna+jQoaT1D1/yyvJEAHdWUFq1aiXLg/eACjE/g2YmTZrE+AsR5Rs3brB169ah7JdHjx6RVM2DBw9I8se4cePk7HLr1q2sc+fOKLtChlACvESQBYLK+IoFX6LKckQIAp9Ky3K87mR7vrO50vAZ88vjx4+NYcOGoSutrKyMtN4Bt5eoT5s2bUirji/Tm40ADagpzIcmYfz7wXffa9Kkibx5JBLRcmxVFevxXDi95pdAgy8rKyuqIjk5OZQSHtZ7wnHdIAR7+3DgdJe5QhD44oNS9QAnysC41vvw9T5d4Z/ABhBYnwyEkSNH4nkhvxw5cgSPwFrL1dnTtP5hori4mM2ZM4fdvHmTNNW0bdsWt75hq1v8YUJshMJ+IHiDwCcJu8IXLlyQx3HNTJ06FR0lycnJpNEAGEA3sMGxdu1a25PzExo0aGDk5eVRyfoJxQBmioqKjJ07d6KbG06NOTXSHOBk6YQJE/C8X5D5gSpah4AqsMP08eNH9NqAOwz8dzBEGjZsSFckjhoxwL8JpcXQf5n/DUBxLYWxfwCnV7DfYJXByQAAAABJRU5ErkJggg=='

export class Serverstatus extends Component {
    render() {
        const {url} = this.props
        return (
            <>
                <BrowserView>
                    <div id="c7">
                        <Button variant="contained" color="primary" onClick={() => {
                            status(url, 25565, response => {
                                console.log(response);
                                if (response.status !== "error") {
                                    var str = response.favicon;
                                    pic = str.split(",").pop();

                                    maxplayers = response.players.max;
                                    playerson = response.players.now;
                                    this.forceUpdate();
                                } else {
                                    var url2 = url;
                                    url = "Cannot connect to server.";
                                    maxplayers = "???";
                                    playerson = "???";
                                    this.forceUpdate();
                                    setTimeout(() => { url = url2; this.forceUpdate(); }, 2000);
                                }
                            })
                        }}>Get Server Info</Button>
                    </div>
                    <br />
                    <br />
                    <Paper color="secondary" id="wrapper" elevation={3}>

                        <div id="c1">
                            <Paper elevation={2}>
                                <GeticonFromBase64 data={pic}></GeticonFromBase64>
                            </Paper>

                        </div>
                        <div id="c2">
                            <p>Currents players online: {playerson}</p>
                            <p>Max players online: {maxplayers}</p>

                        </div>
                        <div id="c3">
                            <hr></hr>
                            <div id="c5">
                                <p>{url}</p>

                            </div>
                            <div id="c4">
                                <Button variant="outlined" color="primary" onClick={() => { navigator.clipboard.writeText(url); BUTTONTEXT = "COPIED!"; this.forceUpdate(); setTimeout(() => { BUTTONTEXT = "COPY"; this.forceUpdate(); }, 2000); }}>{BUTTONTEXT}</Button>
                            </div>
                            <div id="c6">
                                <Button size='small' variant="outlined" color="secondary" onClick={() => { window.open("https://github.com/headblockhead/minecraft-server-status-react") }}>Like this?</Button>
                            </div>
                        </div>


                    </Paper>
                </BrowserView>
                <MobileView>
                <div id="c7">
                        <Button variant="contained" color="primary" onClick={() => {
                            status(url, 25565, response => {
                                console.log(response);
                                if (response.status !== "error") {
                                    var str = response.favicon;
                                    pic = str.split(",").pop();

                                    maxplayers = response.players.max;
                                    playerson = response.players.now;
                                    this.forceUpdate();
                                } else {
                                    var url2 = url;
                                    url = "Cannot connect to server.";
                                    maxplayers = "???";
                                    playerson = "???";
                                    this.forceUpdate();
                                    setTimeout(() => { url = url2; this.forceUpdate(); }, 2000);
                                }
                            })
                        }}>Get Server Info</Button>
                    </div>
                    <br />
                    <br />
                    <Paper color="secondary" id="wrappermobile" elevation={3}>

                        <div id="c1mobile">
                            <Paper elevation={2}>
                                <GeticonFromBase64 data={pic}></GeticonFromBase64>
                            </Paper>

                        </div>
                        <div id="c2mobile">
                            <p>Currents players online: {playerson}</p>
                            <p>Max players online: {maxplayers}</p>

                        </div>
                        <div id="c3mobile">
                            <hr></hr>
                            <div id="c5mobile">
                                <p>{url}</p>
                            </div>
                            <Button size='small' variant="outlined" color="secondary" onClick={() => { window.open("https://github.com/headblockhead/minecraft-server-status-react") }}>Like this?</Button>
                        </div>


                    </Paper>
                </MobileView>
            </>)
    }

}