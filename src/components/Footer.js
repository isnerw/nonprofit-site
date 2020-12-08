import React from 'react';

function Footer() {
  return (
    <div className='container'>
      <footer className='footer' style={FooterStyle}>
        <div className='footer-copyright text-center py-3'>
          © 2020 Copyright:
          <a href='https://mdbootstrap.com/'> MDBootstrap.com</a>
        </div>
      </footer>
    </div>
  );
}

const FooterStyle = {
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
  backgroundColor: '#F8F9FA',
  color: 'black',
  textAlign: 'center',
};

export default Footer;
