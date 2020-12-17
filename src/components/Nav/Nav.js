import React, { Component } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from 'mdbreact';

import logo from '../../images/logo.png';
import './styles.css';
// import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar className='navbar' color='stylish-color' dark expand='md'>
        <MDBContainer>
          <MDBNavbarBrand href='/'>
            <img src={logo} className='logo' />
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle
                    nav
                    caret
                    className='black-text font-weight-bold'
                  >
                    <div className='d-none d-md-inline '>Phage Therapy</div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className='dropdown-default'>
                    <MDBDropdownItem href='/phagetherapy/bio'>
                      What is it?
                    </MDBDropdownItem>
                    <MDBDropdownItem href='/phagetherapy/resources'>
                      Resources
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle
                    nav
                    caret
                    className='black-text font-weight-bold'
                  >
                    <span className='d-none d-md-inline' title='About us'>
                      About Us
                    </span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className='dropdown-default'>
                    <MDBDropdownItem href='/about/board'>
                      Board Of Directors
                    </MDBDropdownItem>
                    <MDBDropdownItem href='/about/sab'>
                      Scientific Advisory Board
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  className='black-text font-weight-bold'
                  to='/donate'
                >
                  Donate
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  className='black-text font-weight-bold'
                  to='/contact'
                >
                  Contact
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
