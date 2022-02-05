import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap'

function NavigBar() {

    

    return (
        <div className="nav-links">
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/bookings">Book a photo session</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/bookings">Bookings</Nav.Link>
                        <Nav.Link href="/bookings/new">Add a Booking</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigBar;