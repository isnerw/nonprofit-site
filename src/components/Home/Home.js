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

import home from '../../images/homeImg.jpg';
import './style.css';

const CardExample = () => {
  return (
    <MDBContainer className='my-5 my-md-5 home-container '>
      <MDBRow className='home-content'>
        <MDBCol>
          <MDBCard reverse>
            <MDBRow>
              <MDBCol className='mx-auto img-fluid'>
                <img
                  className='d-none d-md-block'
                  style={{ width: '100%' }}
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg'
                />
                <img
                  className='d-block d-md-none'
                  style={{ minWidth: '100%' }}
                  src={home}
                />
              </MDBCol>
            </MDBRow>

            <MDBCardBody cascade className='text-center'>
              <MDBCardTitle>Phage Biotics Research Foundation</MDBCardTitle>

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
              <MDBBtn color='primary' href='/phagetherapy/bio'>
                Donate
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default CardExample;
