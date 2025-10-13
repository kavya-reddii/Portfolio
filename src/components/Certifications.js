import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const pageOrder = [
  "/Portfolio",          // Home
  "/Portfolio/about",
  "/Portfolio/skills",
  "/Portfolio/experience",
  "/Portfolio/projects",
  "/Portfolio/certifications",
  "/Portfolio/contact"
];


const certifications = [
  {
    id: 1,
    title: "Angular with Typescript",
    imageUrl: '/Portfolio/certificates/Screenshot 2025-10-11 123434.png',
    
  },
  {
    id: 2,
    title: "IBM DevOps and Software Engineering",
    imageUrl: "/Portfolio/certificates/Screenshot 2025-10-11 123501.png",
    
  },
  {
    id: 3,
    title: "AICTE Web Full Stack Developer",
    imageUrl: "/Portfolio/certificates/Screenshot 2025-10-11 123548.png",
    
  },
  {
    id: 4,
    title: "Salesforce Developer Virtual Internship",
    imageUrl: "/Portfolio/certificates/Screenshot 2025-10-11 123632.png",
   
  },
  {
    id: 5,
    title: "CISCO NetAcad Cybersecurity Essentials",
    imageUrl: "/Portfolio/certificates/Screenshot 2025-10-11 123529.png",
  },
  {
    id: 6,
    title: "CISCO NetAcad Networking Essentials",
    imageUrl: "/Portfolio/certificates/Screenshot 2025-10-11 123612.png",
   
  },
   {
    id: 7,
    title: "Infosys Certified L2 Junior Java Programmer",
    imageUrl: "/Portfolio/certificates/Screenshot 2025-10-11 130157.png",
   
  },
   {
    id: 8,
    title: "Infosys Certified Database and SQL Professional",
    imageUrl: "/Portfolio/certificates/Screenshot 2025-10-11 130223.png",
   
  },
];

export default function Certifications() {
  const navigate = useNavigate();
    const normalizedPath = window.location.pathname.replace(/\/$/, "");
const idx = pageOrder.indexOf(normalizedPath);
const prevPath = idx > 0 ? pageOrder[idx - 1] : pageOrder[pageOrder.length - 1];
const nextPath = idx >= 0 && idx < pageOrder.length - 1 ? pageOrder[idx + 1] : pageOrder[0];

  const [selected, setSelected] = useState(null);

  function toggleSelection(id) {
    setSelected(selected === id ? null : id);
  }

  return (
    <section id="certifications" className="certifications fullpage colorful-bg"><br></br><br></br>
      <h2>Certifications</h2>
      <div className="cert-list">
        {certifications.map(cert => (
          <div
            key={cert.id}
            onClick={() => toggleSelection(cert.id)}
            className={`cert-item ${selected === cert.id ? "active" : ""}`}
          >
            <h3>{cert.title}</h3>
            {selected === cert.id && (
              <div className="cert-viewer">
                <img src={cert.imageUrl} alt={`${cert.title} certificate`} />
                
              </div>
            )}
          </div>
        ))}
      </div>
      <br></br>
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
