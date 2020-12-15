import React from 'react';

function Footer() {
  return (
    <div>
      <footer className='footer' style={FooterStyle}>
        <div className='footer-copyright text-center py-3'>
          © 2020 Copyright:
          <a href='http://blogs.evergreen.edu/phage/'>
            The Evergreen State College
          </a>
        </div>
      </footer>
    </div>
  );
}

const FooterStyle = {
  // position: 'fixed',
  // left: '0',
  // bottom: '0',
  width: '100%',
  backgroundColor: '#343A40',
  color: 'white',
  textAlign: 'center',
  borderTop: '1px solid silver',
};

export default Footer;
