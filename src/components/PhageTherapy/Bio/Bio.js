import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBox } from 'mdbreact';
import phagePic from '../../../images/phagetherapy.jpg';

function Bio() {
  return (
    <MDBContainer className='my-5 align-content-center'>
      <MDBRow>
        <MDBCol>
          <h2
            className='h1-responsive font-weight-bold text-left pb-3'
            style={{ borderBottom: 'solid 1px black' }}
          >
            What is phage therapy?
          </h2>
        </MDBCol>
      </MDBRow>
      <MDBRow className='mt-3 mx-auto'>
        <MDBCol sm='12' md='5'>
          <img src={phagePic} style={{ height: '18rem' }} />
        </MDBCol>
        <MDBCol className='mt-sm-4 mt-md-0' sm='12' md='7'>
          <p>
            Phage therapy, viral phage therapy, or phagotherapy is the
            therapeutic use of bacteriophages to treat pathogenic bacterial
            infections. Bacteriophages, known as phages, are a form of viruses.
            Phages attach to bacterial cells, and inject a viral genome into the
            cell.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Bio;
