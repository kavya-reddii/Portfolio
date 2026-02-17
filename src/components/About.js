import React, { useState } from 'react';
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

const timelineData = [
  { id: 1, title: '10th', institution: "Vowel Techlan School", score: '10.0/10.0', year: '2019', position: 'start' },
  { id: 2, title: '12th', institution: 'Vowel Junior College', score: '97.8%', year: '2021' },
  { id: 3, title: 'Graduation', institution: 'Sree Vidyanikethan Engineering College', score: '9.4/10.0', year: '2025' },
  { id: 4, title: 'Current Work', institution: 'Infosys Ltd.', year: '2025-Present', score: 'System Engineer', position: 'end' },
];

export default function About() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const idx = pageOrder.indexOf(currentPath);
  const validIndex = idx === -1 ? 0 : idx;
  const prevPath = validIndex > 0 ? pageOrder[validIndex - 1] : pageOrder[pageOrder.length - 1];
  const nextPath = validIndex < pageOrder.length - 1 ? pageOrder[validIndex + 1] : pageOrder[0];
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="about" className="about fullpage hero-content-animated" >
      <h2>About Me</h2>
      <p>A passionate Systems Engineer at Infosys specializing in scalable full-stack development and algorithmic problem-solving.</p>
      <p>Primarily skilled in Java, Spring Boot, Angular</p>

      <div className="timeline-container">
        {timelineData.map((item, idx) => (
          <div
            key={item.id}
            className={`timeline-item ${item.position ? item.position : ''}`}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="timeline-dot">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 0 24 24"
                width="30"
                fill={hoveredId === item.id ? '#ff69b4' : '#000000'}
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
            </div>

            <div className="timeline-title">{item.title}</div>

            {hoveredId === item.id && (
              <div className="timeline-card">
                <div><strong>Institution:</strong> {item.institution}</div>
                <div><strong>Year:</strong> {item.year}</div>
                <div>{item.score}</div>
              </div>
            )}

            {idx !== timelineData.length - 1 && <div className="timeline-line"></div>}
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
