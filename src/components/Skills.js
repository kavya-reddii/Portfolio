import React, { useState, useEffect } from 'react';
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


function splitArrayInTwo(arr) {
  const half = Math.ceil(arr.length / 2);
  return [arr.slice(0, half), arr.slice(half)];
}


export default function Skills() {
  const navigate = useNavigate();
    const currentPath = window.location.pathname;
    const idx = pageOrder.indexOf(currentPath);
    const prevPath = idx > 0 ? pageOrder[idx - 1] : pageOrder[pageOrder.length - 1];
    const nextPath = idx < pageOrder.length - 1 ? pageOrder[idx + 1] : pageOrder[0];
   const [animate, setAnimate] = useState(false);
  const skillsData = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java', proficiency: 80 },
        { name: 'SQL', proficiency: 75 },
        { name: 'Python', proficiency: 70 },
        { name: 'Spring Boot', proficiency: 85 },
        { name: 'Angular', proficiency: 80 },
        { name: 'React', proficiency: 75 },
        { name: 'Javascript', proficiency: 70 },
      ],
    },
    {
      title: 'Developer Tools',
      skills: [
        { name: 'Git', proficiency: 85 },
        { name: 'Node.js', proficiency: 80 },
      ],
    },
    {
      title: 'Cloud Services',
      skills: [
        { name: 'Salesforce', proficiency: 60 },
        { name: 'Google Cloud', proficiency: 65 },
        { name: 'IBM Cloud', proficiency: 55 },
      ],
    },
  ];

   useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="skills fullpage hero-content-animated">
      <h2>Skills</h2>
      <div className="cards-vertical-container">
        {skillsData.map((category, index) => {
          const [firstCol, secondCol] = splitArrayInTwo(category.skills);
          return (
            <div key={index} className="skill-card-vertical">
              <h3>{category.title}</h3>
              <div className="skill-list-two-cols">
                <div>
                  {firstCol.map((skill, idx) => (
                    <SkillBar key={idx} skill={skill} animate={animate}/>
                  ))}
                </div>
                <div>
                  {secondCol.map((skill, idx) => (
                    <SkillBar key={idx} skill={skill} animate={animate}/>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
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

function SkillBar({ skill, animate }) {
  return (
    <div className="skill-item-vertical">
      <div className="skill-name">{skill.name}</div>
      <div className="bar-background">
        <div
          className="skill-bar"
          style={{ width: animate ? `${skill.proficiency}%` : `0%` }}
        ></div>
      </div>
    </div>
  );
}
