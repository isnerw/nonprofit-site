import React from 'react';

import { MDBJumbotron, MDBRow, MDBCol } from 'mdbreact';

import './styles.css';

function HowTheyWork() {
  return (
    <div>
      <MDBJumbotron fluid className='pt-0 pb-0 mb-0'>
        <MDBRow>
          <MDBCol>
            <h2
              className='white-text text-center font-weight-bold htw-banner py-4 my-0 border-top border-light'
              style={{
                backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`,
              }}
            >
              How They Work
            </h2>
          </MDBCol>
        </MDBRow>
        <MDBRow
          className='px-3 py-4 my-0 grey-text border-top border-light'
          style={{ backgroundColor: 'black' }}
        >
          <MDBCol>
            <h2 className='py-3 border-bottom border-grey mb-4'>
              <span className='border-top border-white'>T</span>
              heraputic Applications
            </h2>
            <p>
              Phages’ infectious cycle begins with the specific recognition of
              receptors located on the surface of the bacteria. The phage then
              injects genetic material into the bacteria. Then the infection
              cycle continues with the hacking of the bacterial machinery in
              order to produce the genome of the new phages and its structural
              proteins in large numbers. Following an assembling stage, the new
              phages are formed and their evacuation to the outside of the
              bacteria destroys it.{' '}
            </p>
            <p className='pb-3'>
              The multiplication of bacteriophages is swift and always dependent
              on the presence of the targeted bacteria. With lytic phages
              selected and produced by Pherecydes Pharma, such as the T4 phage,
              bacterial cells are immediately killed after replication of the
              virion. As soon as the cell is destroyed, the newly-created phages
              rapidly replicate the cycle as soon as they find new bacteria.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBJumbotron>
    </div>
  );
}

export default HowTheyWork;
