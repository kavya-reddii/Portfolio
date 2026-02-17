import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const pageOrder = [
  "/",          // Home
  "/about",
  "/skills",
  "/experience",
  "/projects",
  "/certifications",
  "/contact"
];

const experiences = [
  {
    role: 'Systems Engineer',
    company: 'Infosys Ltd',
    location: 'Bangalore',
    duration: 'Aug 2025 – Present',
    description: [
      'Hands-on experience in Java Spring Boot, DBMS, AngularJS, ReactJS',
    ],
    logoUrl: '/logo.jpg', // replace with your actual logo path
  },
  {
    role: 'Systems Engineer Internship',
    company: 'Infosys',
    location: 'Mysore DC',
    duration: 'Jan 2025 – July 2025',
    description: [
      'Built RESTful APIs, deployed full-stack applications',
    ],
    logoUrl: '/logo.jpg', // replace if different
  },
];

export default function Experience() {
  const navigate = useNavigate();
  const location = useLocation();  // useLocation hook
  const currentPath = location.pathname; // use location.pathname
  const idx = pageOrder.indexOf(currentPath);
  const validIndex = idx === -1 ? 0 : idx;
  const prevPath = validIndex > 0 ? pageOrder[validIndex - 1] : pageOrder[pageOrder.length - 1];
  const nextPath = validIndex < pageOrder.length - 1 ? pageOrder[validIndex + 1] : pageOrder[0];

  return (
    <section id="experience" className="experience colorful-bg">
      <h2>Experience</h2>
      <div className="exp-cards-container">
        {experiences.map((exp, index) => (
          <div key={index} className="exp-card">
            <img src={process.env.PUBLIC_URL + "/logo.jpg"} alt={`${exp.company} logo`} className="exp-logo" />
            <div className="exp-details">
              <h3>{exp.role}</h3>
              <p className="exp-company">{`${exp.company}, ${exp.location}`}</p>
              <p className="exp-duration">{exp.duration}</p>
              <ul>
                {exp.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
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
