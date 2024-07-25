import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-nav-bar'>
        <h1>Hashmi</h1>
        <div className='footer-nav-items'>
          {["Projects", "Services", "About Me", "Leave a Request"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`} // Example link; adjust as needed
              className='footer-nav-link'
            >
              {item}
            </a>
          ))}
        </div>
        <p>@2024 All right reserved</p>
      </div>
    </div>
  );
}

export default Footer;
