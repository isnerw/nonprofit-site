import React from 'react';
import { MDBRow, MDBCol, MDBBox } from 'mdbreact';

import './styles.css';

const Card = (props) => {
  return (
    <MDBRow className='bod-card my-4 px-3 py-3 '>
      <MDBCol md='3'>
        <img
          src={props.image}
          className='img-fluid py-3 bod-pic d-block mx-auto'
          alt=''
        />
        <h4 className='text-center'>{props.name}</h4>
        <h6 className='text-center text-uppercase'>{props.title}</h6>
      </MDBCol>
      <MDBCol className='py-3 ' md='9'>
        <span className='align-middle'>{props.bio}</span>
      </MDBCol>
    </MDBRow>
  );
};

export default Card;
