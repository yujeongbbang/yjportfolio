import React from 'react';
import { Element } from 'react-scroll';
import '../css/Main.css';
import '../css/Project.css'; 

// 프로젝트 이미지
import ProjectImage1 from '../assets/beanpole.png';
import ProjectImage2 from '../assets/kekeke.png';
import ProjectImage3 from '../assets/puppiet.png';
import ProjectImage4 from '../assets/portfolio.png';


const projects = [
   {
    id: 1,
    image: ProjectImage1,
    type: '개인 프로젝트',
    title: 'Beanpole Website',
    skills: 'Next.js, TypeScript, JavaScript, Github, Vercel',
    description: '빈폴 웹사이트: 원 페이지 스크롤 구현 및 렌더링',
    githubLink: 'https://github.com/yujeongbbang/beanpole-website',
  },
  {
    id: 2,
    image: ProjectImage2,
    title: 'KEKEKE',
    type: '팀 프로젝트 (5명)',
    skills: 'React, HTML/CSS/JS, Node.js, Flask, MySQL, Firebase, Python, KakaoMap Api, Socket API, Konva API, Github, Notion, Figma',
    description: `AI 추천 및 드로잉 기술을 활용한 주문 제작 케이크 플랫폼`,
    githubLink: 'https://github.com/yujeongbbang/kekeke',
  },
  {
    id: 3,
    image: ProjectImage3,
    title: 'PUPPIET',
    type: '팀 프로젝트 (5명)',
    skills: 'HTML/CSS, JavaScript, Firebase, Github',
    description: ['반려견 다이어트를 위한 웹페이지', <br/>, ['견종과 BMI 수치에 따른 사료 추천 및 일일 사료량 계산']],
    githubLink: 'https://github.com/yujeongbbang/puppietTT',
  },
  {
    id: 4,
    image: ProjectImage4,
    title: 'Portfolio',
    type: '개인 프로젝트',
    skills: 'HTML/CSS, React, Github',
    description: 'React 기반 포트폴리오 사이트',
    githubLink: 'https://github.com/yujeongbbang/yjportfolio',
  },
];

const Projects = () => (
  <Element name="projects" className="section projects-section">
    <h1>Projects</h1>
    <div className="projects-container">
      {projects.map(project => (
        <div key={project.id} className="project-card">
          <img src={project.image} alt={`Project ${project.id}`} className="project-image" />
          <div className='project-text'>
          <h2 className="project-title">{project.title}</h2>
          <p className="project-type">{project.type}</p>
          <p className="project-skills"><strong>Skills:</strong> {project.skills}</p>
          <hr/>
          <p className="project-description">{project.description}</p>
          <a href={project.githubLink} className="project-github-link" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
          </div>
      ))}
    </div>
  </Element>
);

export default Projects;
