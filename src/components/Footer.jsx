import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-branding">
        <h2>FlexiBuy</h2>
        <p>Making online shopping affordable!</p>
      </div>
      <div className="footer-subscription">
        <p>Connect us on E-mail</p>
        <form className="subscription-form">
          <input type="email" placeholder="Your email" />
          <a href="mailto:hunnypal99@gmail.com" target="_blank" rel="noopener noreferrer">
            <button type="button">Subscribe</button>
          </a>
        </form>
      </div>
      <div className="footer-social">
        <p>Follow Us</p>
        <div className="social-icons">
          <a href="https://instagram.com/honey__pal_" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://x.com/hunnypal99" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
      <div className="footer-contact">
        <p>Call Us</p>
        <p>+91 8950674313, +91 9717143659</p>
      </div>
    </footer>
  );
}

export default Footer;
