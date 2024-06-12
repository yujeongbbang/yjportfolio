import React from 'react';
import { Element } from 'react-scroll';
import '../css/Home.css'
const Home = () => (
  <Element name="home" className="section home-section">
    <div className="home-content">
      <h1 className="home-title">YJ's Portfolio</h1>
      <div className="home-main-content">
        <h2 className="home-main-title">신입 개발자 포트폴리오</h2>
        <p className="home-sub-title">여기에 소제목을 추가하세요</p>
        </div>
    </div>
  </Element>
);

export default Home;
