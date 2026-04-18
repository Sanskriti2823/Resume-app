import React from "react";

function Skills({ skills }) {
  return (
    <div className="card p-3 m-2">
      <h5>Skills</h5>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;