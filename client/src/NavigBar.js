import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap'

function NavigBar() {

    return (
        <div className="nav-links">
            <Navbar bg="primary" variant="dark">
                <Container>
                    <img className="photo-size" alt="icon" src="https://www.pngkey.com/png/full/10-104955_camera-icon-white-small-camera-icon-white-png.png" />
                    <Navbar.Brand>Photo App</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Bookings</Nav.Link>
                        <Nav.Link href="/bookings/new">Add a Booking</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigBar;