import React, { useState, useEffect } from 'react';
import './Hero.css';
import heroImage from '../assets/img.svg'; // Replace with the actual image path

function Hero() {
  const [text, setText] = useState('');
  const phrases = ['affordably', 'smartly', 'securely'];
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < phrases[index].length) {
        setText((prev) => prev + phrases[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === phrases[index].length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, phrases]);

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Welcome to FlexiBuy</h1>
        <p>Avail credit card offers without owning the credit cards.</p>
        <p className="typing-animation">
          Shop <span className="dynamic-text">{text}</span>
        </p>
        <a href="https://chat.whatsapp.com/Lc8BUGe1k19CdiDtmDtDUU" target="_blank" rel="noopener noreferrer">
          <button className="hero-button">Join Us on WhatsApp</button>
        </a>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;