import React from "react";

function Experience({ experience }) {
  return (
    <div className="card p-3 m-2">
      <h5>Experience</h5>
      {experience && experience.map((exp, index) => (
        <div key={index} className="experience-item">
          <h6>{exp.role} - {exp.company}</h6>
          <p>{exp.years}</p>
        </div>
      ))}
    </div>
  );
}

export default Experience;