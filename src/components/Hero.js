import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageOrder = [
  "/",          // Home
  "/about",
  "/skills",
  "/experience",
  "/projects",
  "/certifications",
  "/contact"
];

export default function Hero() {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const idx = pageOrder.indexOf(currentPath);
  const prevPath = idx > 0 ? pageOrder[idx - 1] : pageOrder[pageOrder.length - 1];
  const nextPath = idx < pageOrder.length - 1 ? pageOrder[idx + 1] : pageOrder[0];
  return (
    <section id="hero" className="hero fullpage">
      <div className="profile-pic-container">
        <img 
          src="Profilepic.jpg" 
          alt="Kavya Mandi" 
          className="profile-pic"
        />
      </div>
      <div className="hero-content-animated">
        <h1>Kavya Mandi</h1>
        <h2>Systems Engineer | Full-Stack Developer | Code Enthusiast</h2>
        <p>Turning caffeine into code and ideas into reality every single day!</p>
        <div className="hero-links">
          <a href="https://linkedin.com/in/kavyax"><i className='fa fa-brands fa-linkedin'></i></a>
          <a href="https://github.com/kavya-reddii"><i className='fa fa-brands fa-github'></i></a>
          <a href="mailto:kavyareddymandi21@gmail.com"><i className='fa fa-brands fa-google-plus'></i></a>
        </div>
      </div>

       <div className="arrow-navigation">
        <button className="arrow-btn left" onClick={() => navigate(prevPath)} aria-label="Previous page">
          &#8592;
        </button>
        <button className="arrow-btn right" onClick={() => navigate(nextPath)} aria-label="Next page">
          &#8594;
        </button>
      </div>
    </section>
    
  );
}
