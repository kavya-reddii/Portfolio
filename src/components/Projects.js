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


const projects = [
  {
    name: 'Airbnb Clone',
    description: 'Full-stack application enabling property-listing, booking and user management.',
    technologies: ['AngularJS', 'SpringBoot'],
  },
  {
    name: 'Hospital Management System',
    description: 'User-friendly full-stack web app for hospital task management.',
    technologies: ['React.js', 'MongoDB', 'Express', 'Node.js'],
  },
  {
    name: 'Digital Diagnosis of Medical Images',
    description: 'Compare the performance of three prominent transfer learning-based architectures—ResNet50, AlexNet, and VGG19.',
    technologies: ['Python', 'Deep Learning'],
  },
];

export default function Projects() {
  const navigate = useNavigate();
    const currentPath = window.location.pathname;
    const idx = pageOrder.indexOf(currentPath);
    const prevPath = idx > 0 ? pageOrder[idx - 1] : pageOrder[pageOrder.length - 1];
    const nextPath = idx < pageOrder.length - 1 ? pageOrder[idx + 1] : pageOrder[0];
  return (
    
    <section id="projects" className="projects colorful-bg">
      <h2>Projects</h2>
      {projects.map((project, idx) => (
        <div className="project-card" key={idx}>
          <div className="project-header">
            <h3>{project.name}</h3>
            <div className="tech-list">
              {project.technologies.map((tech, i) => (
                <span className="tech-pill" key={i}>{tech}</span>
              ))}
            </div>
          </div> <br></br>
          <p>{project.description}</p>
        </div>
      ))}
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
