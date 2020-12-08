import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <NavLink exact to='/' style={{ textDecoration: 'none' }}>
          <a className='navbar-brand ms-5' href='#'>
            PBRF
          </a>
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav w-100 justify-content-end me-5'>
            <li class='nav-item dropdown'>
              <a
                class='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Phage Therapy
              </a>
              <ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
                <NavLink
                  to='/phagetherapy/bio'
                  style={{ textDecoration: 'none' }}
                >
                  <li>
                    <a class='dropdown-item' href='#'>
                      What Is It?
                    </a>
                  </li>
                </NavLink>
                <NavLink
                  to='/phagetherapy/resources'
                  style={{ textDecoration: 'none' }}
                >
                  <li>
                    <a class='dropdown-item' href='#'>
                      Resources
                    </a>
                  </li>
                </NavLink>
              </ul>
            </li>
            <li class='nav-item dropdown'>
              <a
                class='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                About Us
              </a>
              <ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
                <NavLink to='/about/board' style={{ textDecoration: 'none' }}>
                  <li>
                    <a class='dropdown-item' href='#'>
                      Board Of Directors
                    </a>
                  </li>
                </NavLink>
                <NavLink to='/about/sab' style={{ textDecoration: 'none' }}>
                  <li>
                    <a class='dropdown-item' href='#'>
                      Scientific Advisory Board
                    </a>
                  </li>
                </NavLink>
              </ul>
            </li>
            <NavLink to='/donate' style={{ textDecoration: 'none' }}>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Donate
                </a>
              </li>
            </NavLink>
            <NavLink to='/contact' style={{ textDecoration: 'none' }}>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Contact
                </a>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
