import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './styles.css';

function NvgBar() {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Navbar.Brand className='navbrand ml-5' href='/'>
        PBFR
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto mr-5'>
          <NavDropdown title='Phage Therapy' id='collasible-nav-dropdown'>
            <NavDropdown.Item href='/phagetherapy/bio'>
              What is it?
            </NavDropdown.Item>
            <NavDropdown.Item href='/phagetherapy/resources'>
              Resources
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='About Us' id='collasible-nav-dropdown'>
            <NavDropdown.Item href='/about/board'>
              Board Of Directors
            </NavDropdown.Item>
            <NavDropdown.Item href='/about/sab'>
              Scientific advisory board
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href='/donate'>Donate</Nav.Link>
          <Nav.Link href='/contact'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NvgBar;
