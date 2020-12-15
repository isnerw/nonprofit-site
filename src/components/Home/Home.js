import React from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';

import kitty from '../../images/kitty.jpg';
import kitty2 from '../../images/kittens.jpg';
import kitty3 from '../../images/cats.jpg';

import './style.css';

function Home() {
  return (
    <Jumbotron fluid className='jumbo mt-4'>
      <Container className='mt-5'>
        <h1>Phage Biotics Research Foundation</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant='primary'>Learn more</Button>
        </p>
      </Container>
    </Jumbotron>
  );
}

export default Home;
