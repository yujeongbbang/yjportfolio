import React from 'react';
import { Element } from 'react-scroll';
import '../css/Main.css';
import '../css/Project.css'; 

// 프로젝트 이미지
import ProjectImage1 from '../assets/hb11.jpg';
import ProjectImage2 from '../assets/hb10.jpg';

const Projects = () => (
  <Element name="projects" className="section projects-section">
    <h1>Projects</h1>
    <div className="projects-container">
      
      <div className="project-item">
        <div className="project-left">
          <img src={ProjectImage1} alt="프로젝트 이미지 1" className="project-image" />
        </div>
        <div className="project-right">
          <h2 className="project-title">KEKEKE</h2>
          <p>AI 추천 및 드로잉 기술을 활용한 주문 제작 케이크 플랫폼입니다.
            사용자, 판매자별로 마이페이지, 주문내역 페이지 등을 개발하였으며, 전체적인 리스트와 팝업창을 관리하였습니다.
            플라스크 서버를 구축하여 리액트와 연결하고, Node.js를 이용하여 양방향 통신이 가능한 실시간 채팅 구현했습니다.
            케이크 이미지를 크롤링하여 수집하여 전처리하고, resnet50 모델을 활용하여 이미지 분류 학습했습니다.
          </p>
          <div className="project-details">
            <div><strong>담당 개발:</strong> 개발자 이름</div>
            <div><strong>스킬:</strong> React.js, Node.js, MongoDB</div>
          </div>
        </div>
      </div>
      
      <div className="project-item">
        <div className="project-left">
          <img src={ProjectImage2} alt="프로젝트 이미지 2" className="project-image" />
        </div>
        <div className="project-right">
          <h2 className="project-title">PUPPIET</h2>
          <p>프로젝트에 대한 간단한 설명이 들어갑니다.</p>
          <div className="project-details">
            <div><strong>담당 개발:</strong> 개발자 이름</div>
            <div><strong>스킬:</strong> HTML/CSS, JavaScript, Firebase</div>
          </div>
        </div>
      </div>
      
    </div>
  </Element>
);

export default Projects;
