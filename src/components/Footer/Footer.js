import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

import './styles.css';

const FooterPage = () => {
  return (
    <MDBFooter className='font-small pt-4 footer border-top border-white'>
      <div className='footer-copyright text-center py-3'>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a href='https://www.evergreen.edu/'> Evergreen State College </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
