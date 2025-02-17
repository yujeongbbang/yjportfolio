import React from 'react';
import { Link } from 'react-scroll';
import { Element } from 'react-scroll';
import '../css/Home.css';

const Home = () => (
  <Element name="home" className="home-section">
    <div className="home-content">
      <div className="home-main-content">
      <h1 className="home-main-title">배우고, 만들고, 성장하는 개발자 서유정입니다.</h1>
      <p className="home-sub-title">Keep Exploring, Keep Building, Keep Growing</p>
      <p className="home-description">
        새로운 기술을 배우는 것에서 멈추지 않고, 직접 만들어보고 부딪히며 성장합니다.  
        작은 시도들이 모여 더 나은 경험과 서비스를 만든다고 믿습니다.
      </p>
      <p className="home-description">
        저의 프로젝트와 고민의 과정들을 포트폴리오에서 만나보세요.
      </p>
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
