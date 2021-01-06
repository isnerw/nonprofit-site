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

// import logo from '../../images/logo.png';
import './styles.css';

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar className='navbar border-bottom border-white' dark expand='md'>
        <MDBNavbarBrand className='navbrand ml-md-5 pl-md-5' href='/'>
          {/* <img src={logo} className='logo' /> */}
          PBRF
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret className='white-text '>
                  <div className='d-md-inline '>Phage Therapy</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className='dropdown-default'>
                  <MDBDropdownItem href='/phagetherapy/bio'>
                    What is it?
                  </MDBDropdownItem>
                  <MDBDropdownItem href='/phagetherapy/faqs'>
                    FAQs
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret className='white-text '>
                  <div className='d-md-inline' title='About us'>
                    About Us
                  </div>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
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
              <MDBNavLink className='white-text mr-5 pr-5' to='/contact'>
                Contact
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
