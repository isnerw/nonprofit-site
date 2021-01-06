import React from 'react';
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol } from 'mdbreact';

// import silverGradient from '../../../images/silverGradient'
import phageInfoPic from '../../../images/phageInfoPic.png';

import './styles.css';

const PhageInfo = () => {
  return (
    <MDBJumbotron fluid className='py-0 mb-0'>
      <MDBRow>
        <MDBCol className='mt-0 border-top border-white'>
          <h2
            className='white-text text-center font-weight-bold what-banner cloudy-knoxville-gradient py-4 my-0 border-top border-white'
            style={{
              backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`,
            }}
          >
            What is it?
          </h2>
          <p
            className='border-top border-light pt-5 pb-3 px-3 mb-0 grey-text'
            style={{ backgroundColor: 'black' }}
          >
            The phages are natural predator viruses that only infect bacteria.
            They do not infect eukaryotic cells, and are therefore harmless to
            humans, animals, plants, fish, etc. They are present in all aquatic
            and terrestrial environments and represent the most numerous
            biological species on Earth.{' '}
          </p>
          <p
            className='px-3 my-0 pb-5 grey-text'
            style={{ backgroundColor: 'black' }}
          >
            Phages have many qualities because they offer excellent efficacy
            against bacteria – including bacteria that are multi-resistant to
            antibiotics –, are very well tolerated due to their high specificity
            and adapt very quickly to bacterial mutations while respecting
            microbiota, unlike antibiotics.
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <img
            src={phageInfoPic}
            className='img-fluid mb-0 pb-0 w-100 border-top border-light'
            alt=''
          />
        </MDBCol>
      </MDBRow>
    </MDBJumbotron>
  );
};

export default PhageInfo;
