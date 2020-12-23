import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBAlert,
  MDBInput,
} from 'mdbreact';

import './styles.css';

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      name: '',
      email: '',
      subject: '',
      msg: '',
      status: '',
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  };

  submitForm(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  render() {
    const { status } = this.state;
    if (status === 'SUCCESS') {
      return <Redirect to={'/'} />;
    }
    return (
      <MDBContainer className='contact-cont'>
        <h2 className='h1-responsive font-weight-bold text-center mt-5 py-5 align'>
          Contact us
        </h2>
        <p className='text-center w-responsive mx-auto pb-5'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <MDBRow className='mx-auto'>
          <MDBCol md='9' className='md-0 mb-5 '>
            <form
              onSubmit={this.submitForm}
              action='https://formspree.io/f/xleopqlq'
              method='POST'
            >
              <MDBRow>
                <MDBCol md='6'>
                  <div className='md-form mb-0'>
                    <MDBInput
                      type='text'
                      name='name'
                      id='contact-name'
                      label='Your name'
                      onChange={this.onChange}
                      value={this.state.name}
                    />
                  </div>
                </MDBCol>
                <MDBCol md='6'>
                  <div className='md-form mb-0'>
                    <MDBInput
                      type='email'
                      name='email'
                      id='contact-email'
                      label='Your email'
                      onChange={this.onChange}
                      value={this.state.email}
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12'>
                  <div className='md-form mb-0'>
                    <MDBInput
                      type='text'
                      name='subject'
                      id='contact-subject'
                      label='Subject'
                      onChange={this.onChange}
                      value={this.state.subject}
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12'>
                  <div className='md-form mb-0'>
                    <MDBInput
                      type='textarea'
                      name='message'
                      id='contact-message'
                      label='Your message'
                      onChange={this.onChange}
                      value={this.state.message}
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              {status === 'ERROR' && (
                <MDBAlert color='warning'>Oops, there was an error!</MDBAlert>
              )}
              {status === 'SUCCESS' ? (
                <MDBAlert color='primary'>Thanks!</MDBAlert>
              ) : (
                <div className='text-center text-md-left'>
                  <MDBBtn color='primary' size='md' type='submit'>
                    Send
                  </MDBBtn>
                </div>
              )}
            </form>
          </MDBCol>
          <MDBCol md='3' className='text-center'>
            <ul className='list-unstyled mb-0'>
              <li>
                <MDBIcon
                  icon='map-marker-alt'
                  size='2x'
                  className='blue-text'
                />
                <p>Olympia, WA 95135, USA</p>
              </li>
              <li>
                <MDBIcon icon='phone' size='2x' className='blue-text mt-4' />
                <p>+ 01 234 567 89</p>
              </li>
              <li>
                <MDBIcon icon='envelope' size='2x' className='blue-text mt-4' />
                <p>contact@example.com</p>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default ContactPage;
