import React from 'react';
import { MDBContainer } from 'mdbreact';
import Card from '../../Card/Card';

import membersObject from '../../../utils/membersObjects';
import './styles.css';

const BoardOfDirectors = () => {
  const members = membersObject.map((member) => {
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
      <h1 className='board-title h1-responsive font-weight-bold text-center border-bottom border-dark pb-3'>
        Board Of Directors
      </h1>
      {members}
    </MDBContainer>
  );
};

export default BoardOfDirectors;
