import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div> {/* Added parent container */}
      <section id="about-us" className="about-us-container"> {/* Added id attribute */}
        <h2>About Us</h2>
        <p>
          We are a passionate team at NIT Nagpur building a revolutionary platform that promotes financial inclusivity through discounts to non-card holders and commission possibilities for card holders. Our project not only seeks to improve the overall consumer experience but also works towards better credit scores and higher rewards for the consumers. By this double advantage system, we hope to build a more inclusive financial environment.
        </p>
      </section>
      <section className="team-container">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <p>Honey Pal</p>
            <a href="https://www.linkedin.com/in/honey-pal-520983335/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="linkedin-icon" />
            </a>
          </div>
          <div className="team-member">
            <p>Dhroov Jindal</p>
            <a href="https://www.linkedin.com/in/dhroov-jindal-60201930a/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="linkedin-icon" />
            </a>
          </div>
          <div className="team-member">
            <p>Aagam Sancheti</p>
            <a href="https://www.linkedin.com/in/aagam-sancheti-133a54207/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="linkedin-icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
