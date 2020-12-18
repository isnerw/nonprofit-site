// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import ContactPage from "./myform.js"'.
// Finally, add a <ContactPage/> element whereever you wish to display the form.

// import React from 'react';

// export default class ContactPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.submitForm = this.submitForm.bind(this);
//     this.state = {
//       status: '',
//     };
//   }

//   render() {
//     const { status } = this.state;
//     return (
//       <form
//         onSubmit={this.consoleLog}
//         action='https://formspree.io/f/xleopqlq'
//         method='POST'
//       >
//         <label>Name:</label>
//         <input type='text' name='name' />
//         <label>Email:</label>
//         <input type='email' name='email' />
//         <label>Subject:</label>
//         <input type='text' name='Subject' />
//         <label>Message:</label>
//         <input type='text' name='message' />
//         {status === 'SUCCESS' ? <p>Thanks!</p> : <button>Submit</button>}
//         {status === 'ERROR' && <p>Ooops! There was an error.</p>}
//       </form>
//     );
//   }

//   submitForm(ev) {
//     ev.preventDefault();
//     const form = ev.target;
//     const data = new FormData(form);
//     const xhr = new XMLHttpRequest();
//     xhr.open(form.method, form.action);
//     xhr.setRequestHeader('Accept', 'application/json');
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState !== XMLHttpRequest.DONE) return;
//       if (xhr.status === 200) {
//         form.reset();
//         this.setState({ status: 'SUCCESS' });
//       } else {
//         this.setState({ status: 'ERROR' });
//       }
//     };
//     xhr.send(data);
//   }
//   consoleLog() {
//     console.log('Hello world!');
//   }
// }

import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  Button,
  MDBInput,
} from 'mdbreact';

import './styles.css';

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  render() {
    const { status } = this.state;
    return (
      <MDBContainer className='contact-cont '>
        <h2 className='h1-responsive font-weight-bold text-center mt-5 py-5 align-middle'>
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
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              {status === 'ERROR' && <p>Ooops! There was an error.</p>}
              {status === 'SUCCESS' ? (
                <p>Thanks!</p>
              ) : (
                <div className='text-center text-md-left'>
                  <Button
                    color='primary'
                    size='md'
                    type='submit'
                    onSubmit={this.consoleLog}
                  >
                    Send
                  </Button>
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

  consoleLog() {
    console.log('Hello world!');
  }
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
  }
}

export default ContactPage;
