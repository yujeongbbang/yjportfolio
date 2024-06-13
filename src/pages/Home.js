import React from 'react';
import { Element } from 'react-scroll';
import '../css/Home.css'
import '../css/Main.css';

const Home = () => (
  <Element name="home" className="section home-section">
    <div className="home-content">
      <div className="home-main-content">
        <h2 className="home-main-title">신입 프론트 개발자 포트폴리오</h2>
        <p className="home-sub-title">여기에 소제목을 추가하세요</p>
        </div>
    </div>
  </Element>
);

export default Home;
