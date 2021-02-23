import React, { Component } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Serverstatus } from '../server-status/serverstatus';
import "./Mc.css";

class Mc extends Component {
    render() {
        return (
            <>
                    <div style={{ display: 'flex', justifyContent: 'center', padding: 30, textalign: 'center' }}>
                        <div ><h2 style={{ display: 'flex', justifyContent: 'center', padding: 5, textalign: 'center', }}>My Minecraft Server!</h2><hr></hr>
                            <Serverstatus/>
                        </div>
                    </div >
            </>
        );
    }
}

export default Mc;