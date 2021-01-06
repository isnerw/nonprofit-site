import React from 'react';
import { MDBBtn } from 'mdbreact';

import './style.css';

const LandingPage = () => {
  return (
    <div className='bg d-flex flex-column justify-content-center '>
      <div className='text-center mt-lg-n5'>
        <h1 className='bio-title flex-direction-column white-text mt-n5 '>
          <span className='border-top border-white'>P</span>hage Biotics
          Research Foundation
        </h1>
        <p className='text-center white-text font-italic font-weight-bold z-depth-5'>
          'Leading the fight against antimicrobial resistance'
        </p>
        <MDBBtn className='bio-btn ' gradient='blue' href='/phagetherapy/bio'>
          <h5 className='black-text font-weight-bold'>Find out more</h5>
        </MDBBtn>
      </div>
    </div>
  );
};

export default LandingPage;
