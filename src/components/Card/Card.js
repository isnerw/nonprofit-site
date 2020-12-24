import React from 'react';
import { MDBRow, MDBCol, MDBBox } from 'mdbreact';

import './styles.css';

const Card = (props) => {
  return (
    <MDBRow className='bod-card my-4 px-3 py-3 '>
      <MDBCol md='3'>
        <img src={props.image} className='img-fluid py-3 bod-pic' alt='' />
        <h4 className='text-center'>{props.name}</h4>
        <h5 className='text-center'>{props.title}</h5>
      </MDBCol>
      <MDBCol className='py-3' md='9'>
        {props.bio}
      </MDBCol>
    </MDBRow>
  );
};

export default Card;
