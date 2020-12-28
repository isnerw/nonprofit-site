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
      <h2 className='h1-responsive font-weight-bold text-center'>
        Board Of Directors
      </h2>
      {members}
    </MDBContainer>
  );
};

export default BoardOfDirectors;
