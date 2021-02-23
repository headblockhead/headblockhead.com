import React from 'react';
import './Navbar.css';
import { BrowserView, MobileView } from 'react-device-detect';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props, onToggleDark) => {
    console.log(props);
    return (
        <>
            <BrowserView>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/">Headblockhead.com</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/Mc">Minecraft server</Nav.Link>
                            <Nav.Link href="/Games">Games</Nav.Link>
                            <Nav.Link href="/Products">Shop</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </BrowserView>
            <MobileView>
            <Navbar bg="primary" variant="dark">
                    <Navbar.Brand style={{fontSize:12}}href="/">Headb</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/Mc">Minecraft</Nav.Link>
                            <Nav.Link href="/Games">Games</Nav.Link>
                            <Nav.Link href="/Products">Buy</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </MobileView>
        </>
    )
}

export default withRouter(Navigation);