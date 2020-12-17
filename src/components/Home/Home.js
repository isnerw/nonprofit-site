import React from 'react';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
} from 'mdbreact';

const CardExample = () => {
  return (
    <MDBContainer className='my-5 my-md-5 home-cont'>
      <MDBRow>
        <MDBCol>
          <MDBCard reverse>
            <MDBRow>
              <MDBCol className='mx-auto'>
                <img
                  style={{ height: '100%', width: '100%' }}
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg'
                />
              </MDBCol>
            </MDBRow>

            <MDBCardBody cascade className='text-center'>
              <MDBCardTitle>Phage Biotics Research Foundation</MDBCardTitle>
              {/* <h5 className='indigo-text'>
                <strong>Photography</strong>
              </h5> */}
              <MDBCardText>
                Established in January 1973, we are Evergreen’s first lab
                building ever opened. We focus mostly on bacteriophage which
                infect E. coli, but have also done work with other hosts, such
                as Pseudomonas aeruginosa, and are also involved in work towards
                phage therapy with our international partners.
              </MDBCardText>
              <MDBBtn color='primary' href='/phagetherapy/bio'>
                Learn more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default CardExample;
