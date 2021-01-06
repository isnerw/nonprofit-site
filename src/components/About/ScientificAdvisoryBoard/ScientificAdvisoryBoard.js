import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBox } from 'mdbreact';
import Card from '../../Card/Card';

import sabObject from '../../../utils/sabObject';
import './styles.css';

const ScientificAdvisoryBoard = () => {
  const members = sabObject.map((member) => {
    return (
      <Card
        image={member.image}
        name={member.name}
        title={member.title}
        bio={member.bio}
      />
    );
  });

  return (
    <MDBContainer className='my-5'>
      <h2 className='sab-title h1-responsive font-weight-bold text-center text-left border-bottom border-dark pb-3'>
        Scientific Advisory Board{' '}
      </h2>
      {members}
    </MDBContainer>
  );
};

export default ScientificAdvisoryBoard;
