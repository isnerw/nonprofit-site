import React from 'react';
import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Nav = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#link'>Link</Nav.Link>
          <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-success'>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    // <nav
    //   className='navbar navbar-expand-lg navbar-light bg-light'
    // >
    //   <div className='container-fluid'>
    //     <NavLink exact to='/' style={{ textDecoration: 'none' }}>
    //       <a className='navbar-brand ms-5' href='#'>
    //         PBRF
    //       </a>
    //     </NavLink>
    //     <button
    //       className='navbar-toggler'
    //       type='button'
    //       data-bs-toggle='collapse'
    //       data-bs-target='#navbarNav'
    //       aria-controls='navbarNav'
    //       aria-expanded='false'
    //       aria-label='Toggle navigation'
    //     >
    //       <span className='navbar-toggler-icon'></span>
    //     </button>
    //     <div className='collapse navbar-collapse' id='navbarNav'>
    //       <ul className='navbar-nav w-100 justify-content-end me-5'>
    //         <li class='nav-item dropdown'>
    //           <a
    //             class='nav-link dropdown-toggle'
    //             href='#'
    //             id='navbarDropdown'
    //             role='button'
    //             data-bs-toggle='dropdown'
    //             aria-expanded='false'
    //           >
    //             Phage Therapy
    //           </a>
    //           <ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
    //             <NavLink
    //               to='/phagetherapy/bio'
    //               style={{ textDecoration: 'none' }}
    //             >
    //               <li>
    //                 <a class='dropdown-item' href='#'>
    //                   What Is It?
    //                 </a>
    //               </li>
    //             </NavLink>
    //             <NavLink
    //               to='/phagetherapy/resources'
    //               style={{ textDecoration: 'none' }}
    //             >
    //               <li>
    //                 <a class='dropdown-item' href='#'>
    //                   Resources
    //                 </a>
    //               </li>
    //             </NavLink>
    //           </ul>
    //         </li>
    //         <li class='nav-item dropdown'>
    //           <a
    //             class='nav-link dropdown-toggle'
    //             href='#'
    //             id='navbarDropdown'
    //             role='button'
    //             data-bs-toggle='dropdown'
    //             aria-expanded='false'
    //           >
    //             About Us
    //           </a>
    //           <ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
    //             <NavLink to='/about/board' style={{ textDecoration: 'none' }}>
    //               <li>
    //                 <a class='dropdown-item' href='#'>
    //                   Board Of Directors
    //                 </a>
    //               </li>
    //             </NavLink>
    //             <NavLink to='/about/sab' style={{ textDecoration: 'none' }}>
    //               <li>
    //                 <a class='dropdown-item' href='#'>
    //                   Scientific Advisory Board
    //                 </a>
    //               </li>
    //             </NavLink>
    //           </ul>
    //         </li>
    //         <NavLink to='/donate' style={{ textDecoration: 'none' }}>
    //           <li className='nav-item'>
    //             <a className='nav-link' href='#'>
    //               Donate
    //             </a>
    //           </li>
    //         </NavLink>
    //         <NavLink to='/contact' style={{ textDecoration: 'none' }}>
    //           <li className='nav-item'>
    //             <a className='nav-link' href='#'>
    //               Contact
    //             </a>
    //           </li>
    //         </NavLink>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Nav;
