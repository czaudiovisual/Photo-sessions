import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap'

function NavigBar({ setCurrentUser }) {

    

    return (
        <div className="nav-links">
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/bookings">Book a photo session</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/bookings">Bookings</Nav.Link>
                        <Nav.Link href="/BookingForm">Add a Booking</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigBar;
