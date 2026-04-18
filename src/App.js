import './App.css';

import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import profileData from "./Data/profileData";

function App() {
  return (
    <div className="container">
      <Header name={profileData.name} role={profileData.role} />

      <div className="row mt-3">
        <div className="col-md-4">
          <Profile email={profileData.email} />
          <Skills skills={profileData.skills} />
        </div>

        <div className="col-md-8">
          <Experience experience={profileData.experience} />
          <Education education={profileData.education} />
        </div>
      </div>
    </div>
  );
}

export default App;

