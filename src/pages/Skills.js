import React from 'react';
import { Element } from 'react-scroll';
import '../css/Main.css';
import '../css/Skills.css';

const Skills = () => (
  <Element name="skills" className="section">
    <h1>Skills</h1>
    <div className="skills-container">
      <div className="skills-category">
        <h2>Front-end</h2>
        <div className="skills-items">
          <span>HTML/CSS</span>
          <span>JavaScript</span>
          <span>React.js</span>
          <span>Next.js</span>
          <span>TypeScript</span>
        </div>
      </div>
      <div className="skills-category">
        <h2>Mobile App Development</h2>
        <div className="skills-items">
          <span>Android</span>
          <span>Flutter</span>
          <span>Kotlin</span>
        </div>
      </div>
      <div className="skills-category">
        <h2>Back-end</h2>
        <div className="skills-items">
          <span>Node.js</span>
          <span>Python</span>
        </div>
      </div>
      <div className="skills-category">
        <h2>Database</h2>
        <div className="skills-items">
          <span>MySQL</span>
          <span>Oracle</span>
          <span>Firebase</span>
        </div>
      </div>
      <div className="skills-category tools-category">
        <h2>Tools</h2>
        <div className="skills-items">
          <span>Git</span>
          <span>Notion</span>
          <span>Figma</span>
          <span>VS Code</span>
          <span>Jupyter Notebook</span>
          <span>Google Colab</span>
          <span>Vercel</span>
        </div>
      </div>
    </div>
  </Element>
);

export default Skills;
