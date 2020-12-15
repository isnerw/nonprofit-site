import React from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap';

import './styles.css';

function BoardOfDirectors() {
  return (
    <Container fluid className='bod'>
      <h1>Board Of Directors</h1>
      <Row>
        <Card
          className='mt-5'
          style={{ margin: 'auto', height: '25rem', width: '25rem' }}
        >
          <Card.Img variant='top' src='holder.js/100px180' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card
          className='mt-5'
          style={{ margin: 'auto', height: '25rem', width: '25rem' }}
        >
          <Card.Img variant='top' src='holder.js/100px180' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card
          className='mt-5'
          style={{ margin: 'auto', height: '25rem', width: '25rem' }}
        >
          <Card.Img variant='top' src='holder.js/100px180' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card>
      </Row>
      <Row className='mb-5'>
        <Card
          className='mt-5'
          style={{ margin: 'auto', height: '25rem', width: '25rem' }}
        >
          <Card.Img variant='top' src='holder.js/100px180' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card
          className='mt-5'
          style={{ margin: 'auto', height: '25rem', width: '25rem' }}
        >
          <Card.Img variant='top' src='holder.js/100px180' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card
          className='mt-5'
          style={{ margin: 'auto', height: '25rem', width: '25rem' }}
        >
          <Card.Img variant='top' src='holder.js/100px180' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default BoardOfDirectors;
