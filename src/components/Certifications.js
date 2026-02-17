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

const certifications = [
  {
    id: 1,
    title: "Angular with Typescript",
    imageUrl: process.env.PUBLIC_URL + '/certificates/Screenshot 2025-10-11 123434.png',
  },
  {
    id: 2,
    title: "IBM DevOps and Software Engineering",
    imageUrl: process.env.PUBLIC_URL + "/certificates/Screenshot 2025-10-11 123501.png",
  },
  {
    id: 3,
    title: "AICTE Web Full Stack Developer",
    imageUrl: process.env.PUBLIC_URL + "/certificates/Screenshot 2025-10-11 123548.png",
  },
  {
    id: 4,
    title: "Salesforce Developer Virtual Internship",
    imageUrl: process.env.PUBLIC_URL + "/certificates/Screenshot 2025-10-11 123632.png",
  },
  {
    id: 5,
    title: "CISCO NetAcad Cybersecurity Essentials",
    imageUrl: process.env.PUBLIC_URL + "/certificates/Screenshot 2025-10-11 123529.png",
  },
  {
    id: 6,
    title: "CISCO NetAcad Networking Essentials",
    imageUrl: process.env.PUBLIC_URL + "/certificates/Screenshot 2025-10-11 123612.png",
  },
  {
    id: 7,
    title: "Infosys Certified L2 Junior Java Programmer",
    imageUrl: process.env.PUBLIC_URL + "/certificates/Screenshot 2025-10-11 130157.png",
  },
  {
    id: 8,
    title: "Infosys Certified Database and SQL Professional",
    imageUrl: process.env.PUBLIC_URL + "/certificates/Screenshot 2025-10-11 130223.png",
  },
];

export default function Certifications() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const idx = pageOrder.indexOf(currentPath);
  const validIndex = idx === -1 ? 0 : idx;
  const prevPath = validIndex > 0 ? pageOrder[validIndex - 1] : pageOrder[pageOrder.length - 1];
  const nextPath = validIndex < pageOrder.length - 1 ? pageOrder[validIndex + 1] : pageOrder[0];

  const [selected, setSelected] = useState(null);

  function toggleSelection(id) {
    setSelected(selected === id ? null : id);
  }

  return (
    <section id="certifications" className="certifications fullpage colorful-bg"><br /><br />
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
      <br />
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
