import React, { useState } from 'react';
import { Element } from 'react-scroll';
import '../css/Main.css';
import '../css/Project.css'; 
import Modal from '../components/Modal'

import ProjectImage1 from '../assets/beanpole2.png';
import ProjectImage2 from '../assets/kekeke.png';
import ProjectImage3 from '../assets/puppiet.png';
import ProjectImage4 from '../assets/portfolio.png';
import ProjectImage5 from '../assets/mistybot.png';

const projects = [
  {
    id: 1,
    image: ProjectImage1,
    type: '개인 프로젝트',
    title: 'Beanpole Website',
    skills: 'Next.js, TypeScript, Github, Vercel',
    description: '빈폴 웹사이트: 원 페이지 스크롤 구현 및 렌더링',
    githubLink: 'https://github.com/yujeongbbang/beanpole_web',
    readmeFile: 'beanpole.md', 
  },
  {
    id: 2,
    image: ProjectImage2,
    title: 'KEKEKE',
    type: '팀 프로젝트 (5명)',
    skills: 'React, HTML/CSS, JavaScript, Node.js, Flask, MySQL, Firebase, Python, KakaoMap Api, Socket API, Konva API, Github, Notion, Figma',
    description: `AI 추천 및 드로잉 기술을 활용한 주문 제작 케이크 플랫폼`,
    githubLink: 'https://github.com/yujeongbbang/kekeke',
    readmeFile: 'kekeke.md', 
  },
  {
    id: 3,
    image: ProjectImage5,
    title: 'MistyBot',
    type: '팀 프로젝트 (4명)',
    skills: 'Android Studio, Kotlin, Ubuntu, Raspberry Pi, Arduino, Python, Firebase, GitHub, Notion, Figma',
    description: '이동형 자동 가습기 어플리케이션',
    githubLink: 'https://github.com/yujeongbbang/MistyBot',
    readmeFile: 'mistybot.md', 
  },
  {
    id: 4,
    image: ProjectImage3,
    title: 'PUPPIET',
    type: '팀 프로젝트 (5명)',
    skills: 'HTML/CSS, JavaScript, Firebase, Github',
    description: '반려견 다이어트를 위한 웹페이지\n견종과 BMI 수치에 따른 사료 추천 및 일일 사료량 계산',
    githubLink: 'https://github.com/yujeongbbang/puppietTT',
    readmeFile: 'puppiet.md',
  },
  {
    id: 5,
    image: ProjectImage4,
    title: 'Portfolio',
    type: '개인 프로젝트',
    skills: 'HTML/CSS, javascript, React, Github',
    description: 'React 기반 포트폴리오 사이트',
    githubLink: 'https://github.com/yujeongbbang/yjportfolio',
    readmeFile: 'portfolio.md', 
  },
];

const Projects = () => {
  const [readmeContent, setReadmeContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchReadme = async (fileName) => {
    try {
      const response = await fetch(`/readmes/${fileName}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const text = await response.text();
      setReadmeContent(text);
      setIsModalOpen(true); 
    } catch (error) {
      console.error('Error loading README:', error);
      setReadmeContent('Error loading the README file.');
      setIsModalOpen(true); 
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); 
    setReadmeContent(''); 
  };

  return (
    <Element name="projects" className="section projects-section">
      <h1>Projects</h1>
      <div className="projects-container">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="project-card" 
            onClick={() => fetchReadme(project.readmeFile)} // 카드 클릭 시 모달 열기
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-text">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-type">{project.type}</p>
              <p className="project-skills"><strong>Skills:</strong> {project.skills}</p>
              <hr />
              <p className="project-description">
                {project.description.split('\n').map((line, index) => (
                  <span key={index}>{line}<br/></span>
                ))}
              </p>
              <a href={project.githubLink} className="project-github-link" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* 모달 컴포넌트 표시 */}
      <Modal isOpen={isModalOpen} content={readmeContent} onClose={closeModal} />
    </Element>
  );
};

export default Projects;
