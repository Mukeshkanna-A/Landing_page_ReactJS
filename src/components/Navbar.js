import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarScroll() {
  return (
    <Navbar expand="lg" className="bg-light">
      <Container fluid>
        <Navbar.Brand href="#" className='p-3'
        style={{ fontSize: '2rem',fontWeight:'bolder' }}>Design</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 pe-5"
            style={{ maxHeight: '100px' }}
          >
            <Nav.Link href="#action1" style={{ fontSize: '1rem',fontWeight:'bold' }}>Home</Nav.Link>
            <Nav.Link href="#" style={{ fontSize: '1rem',fontWeight:'bold' }}>Contact</Nav.Link>
          </Nav>
            <Button variant="outline-primary" className='my-3 me-3'>Sign in</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarScroll;