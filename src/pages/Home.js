import React from 'react';
import { Link } from 'react-scroll';
import { Element } from 'react-scroll';
import '../css/Home.css';

const Home = () => (
  <Element name="home" className="home-section">
    <div className="home-content">
      <div className="home-main-content">
        <h1 className="home-main-title">사용자 중심의 개발자, 서유정입니다</h1>
        <p className="home-sub-title">Exploring the World of Front-end Development</p>
        <p className="home-description">
          안녕하세요! 신입 개발자로서 창의적인 도전과 학습을 통해 웹의 미래를 만들어가고 있는 서유정입니다.
        </p>
        <p className="home-description"> 제 포트폴리오에서 제가 가진 다양한 기술 역량과 앞으로의 성장 가능성을 확인해 보세요.</p>
        <div className="home-cta">
          <Link to="introduce" smooth={true} duration={1000} className="home-cta-button">
            View My Portfolio
          </Link>
        </div>
      </div>
    </div>
  </Element>
);

export default Home;
